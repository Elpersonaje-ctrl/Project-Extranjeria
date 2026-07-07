/**
 * @startingPoint section="Core" subtitle="Typewriter-style uppercase section kicker" viewport="700x120"
 */
export interface EyebrowProps {
  /** `default` (gold, for light backgrounds), `dark` (forest-light), `light` (for dark/forest backgrounds). */
  tone?: 'default' | 'dark' | 'light';
  children?: React.ReactNode;
}
