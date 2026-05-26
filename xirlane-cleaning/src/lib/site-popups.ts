export const POPUP_MIN_WIDTH_PX = 768;

/** Pages where conversion popups must not appear (contact / booking). */
export const POPUP_EXCLUDED_PATHS = ["/contact"] as const;

export type SitePopupType = "scroll" | "exit-intent";

type PopupListener = () => void;

let activePopup: SitePopupType | null = null;
const listeners = new Set<PopupListener>();

export function isPopupExcludedPath(pathname: string): boolean {
  return POPUP_EXCLUDED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

export function isPopupViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= POPUP_MIN_WIDTH_PX;
}

export function canUseSitePopups(pathname: string): boolean {
  return isPopupViewport() && !isPopupExcludedPath(pathname);
}

export function getActiveSitePopup(): SitePopupType | null {
  return activePopup;
}

export function subscribeSitePopupState(listener: PopupListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function notifySitePopupState() {
  listeners.forEach((listener) => listener());
}

/** Returns true when this popup type may open (no other popup is active). */
export function claimSitePopup(type: SitePopupType): boolean {
  if (activePopup && activePopup !== type) return false;
  activePopup = type;
  notifySitePopupState();
  return true;
}

/** Take over from another popup (e.g. exit intent over scroll corner card). */
export function forceClaimSitePopup(type: SitePopupType): void {
  activePopup = type;
  notifySitePopupState();
}

export function releaseSitePopup(type: SitePopupType): void {
  if (activePopup !== type) return;
  activePopup = null;
  notifySitePopupState();
}
