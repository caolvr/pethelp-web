'use client';

import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import React from 'react';

type DateInputProps = {
  label: string;
};

export default function DateInput({ label }: DateInputProps) {
  const [data, setData] = React.useState<Date>();

  return (
    <>
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-between font-normal">
            {data ? format(data, 'dd/MM/yyyy', { locale: ptBR }) : 'dd/mm/aaaa'}
            <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Calendar
            mode="single"
            selected={data}
            onSelect={setData}
            locale={ptBR}
            autoFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
