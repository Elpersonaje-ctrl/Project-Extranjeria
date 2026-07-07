import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Primary, secondary and WhatsApp CTA buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** Visual style. `whatsapp` is the brand's WhatsApp-green CTA used for the main conversion action. */
  variant?: 'primary' | 'secondary' | 'whatsapp';
  size?: 'base' | 'large';
  /** Renders as an <a> when `href` is set, otherwise a <button>. */
  href?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
}
