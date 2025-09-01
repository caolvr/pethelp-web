import { Textarea } from '@/components/ui/textarea';

type TextareaInputProps = {} & React.ComponentProps<typeof Textarea>;

export function TextareaDemo() {
  return <Textarea placeholder="" />;
}
