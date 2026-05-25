import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  canUseSitePopups,
  getActiveSitePopup,
  isPopupExcludedPath,
  isPopupViewport,
  POPUP_MIN_WIDTH_PX,
  subscribeSitePopupState,
  type SitePopupType,
} from "@/lib/site-popups";

export function useSitePopupEligibility(popupType: SitePopupType) {
  const pathname = usePathname();
  const [eligible, setEligible] = useState(false);
  const [blockedByOtherPopup, setBlockedByOtherPopup] = useState(false);

  useEffect(() => {
    const sync = () => {
      const allowed = canUseSitePopups(pathname);
      const active = getActiveSitePopup();
      setEligible(allowed);
      setBlockedByOtherPopup(Boolean(active && active !== popupType));
    };

    sync();

    const mediaQuery = window.matchMedia(`(min-width: ${POPUP_MIN_WIDTH_PX}px)`);
    mediaQuery.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    const unsubscribe = subscribeSitePopupState(sync);

    return () => {
      mediaQuery.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
      unsubscribe();
    };
  }, [pathname, popupType]);

  return {
    eligible,
    blockedByOtherPopup,
    pathname,
    isExcludedPath: isPopupExcludedPath(pathname),
    isDesktopViewport: isPopupViewport(),
  };
}
