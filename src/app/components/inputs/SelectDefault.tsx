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

type SelectDefaultProps = {
  placeholder?: string;
  label?: string;
  options: { value: string; name: string }[];
} & React.ComponentProps<typeof Select>;

export function SelectDefault({
  placeholder,
  label,
  options,
  ...props
}: SelectDefaultProps) {
  return (
    <Select>
      <SelectTrigger className="w-[300px] bg-white border border-gray-300 rounded-md shadow-sm hover:cursor-pointer">
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
