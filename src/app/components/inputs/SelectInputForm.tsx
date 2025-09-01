import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectInputProps = {
  placeholder?: string;
  label?: string;
  options: { value: string; name: string }[];
  value?: string;
  onValueChange?: (value: string) => void;
} & React.ComponentProps<typeof Select>;

export function SelectInput({
  placeholder,
  label,
  options,
  value,
  onValueChange,
  ...props
}: SelectInputProps) {
  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
