/**
 * @startingPoint section="Process" subtitle="Horizontal numbered stage tracker with stamped detail panel" viewport="700x360"
 */
export interface ProcessStep {
  label: string;
  body: string;
}
export interface ProcessTrackerProps {
  steps: ProcessStep[];
  /** Controlled active index. Omit for internal state (click-to-highlight). */
  active?: number;
  onChange?: (index: number) => void;
  /** `vertical` (default) draws a descending root/trunk line with branching
   * fibers connecting stacked stages — the current Raíz process visual.
   * `horizontal` keeps the earlier left-to-right dashed-track variant. */
  orientation?: 'vertical' | 'horizontal';
}
