/**
 * @startingPoint section="Forms" subtitle="Labeled field wrapper + input/select/textarea" viewport="700x260"
 */
export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  children?: React.ReactNode;
}
