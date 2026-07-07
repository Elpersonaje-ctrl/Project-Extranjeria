/**
 * @startingPoint section="Cards" subtitle="Blog teaser: date, title, excerpt, link" viewport="700x260"
 */
export interface BlogCardProps {
  /** e.g. "07 JUL 2026" */
  date: string;
  title: string;
  excerpt: string;
  href?: string;
}
