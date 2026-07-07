/**
 * @startingPoint section="Badges" subtitle="Numbered dashed-circle step marker" viewport="700x140"
 */
export interface StepStampProps {
  n: number | string;
  /** `light` (gold-light, for the dark methodology section) or `default`. */
  tone?: 'light' | 'default';
}
