/**
 * @startingPoint section="Navigation" subtitle="Sticky header: wordmark, links, primary CTA" viewport="700x100"
 */
export interface NavLink {
  label: string;
  href: string;
}
export interface NavbarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}
