import { BUSINESS, SITE_URL } from "./site";

export const BLOG_AUTHOR = {
  id: "xirlane-team",
  name: "Xirlane Cleaning Team",
  role: "Philadelphia Cleaning Specialists",
  bio: `${BUSINESS.name} writes practical guides for homeowners, renters, and businesses in Greater Philadelphia. Our crews serve Philadelphia, Montgomery, Delaware, Chester, and Bucks counties with insured house, commercial, and specialty cleaning.`,
  url: SITE_URL,
} as const;
