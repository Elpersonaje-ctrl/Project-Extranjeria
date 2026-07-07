/**
 * @startingPoint section="Navigation" subtitle="Dark footer with legal disclaimer" viewport="700x360"
 */
export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterProps {
  navLinks?: FooterLink[];
  legalLinks?: FooterLink[];
}
