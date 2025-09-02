'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import DateInput from '@/app/components/inputs/DateInput';
import { SelectDefault } from '@/app/components/inputs/SelectDefault';
import { SelectInput } from '@/app/components/inputs/SelectInputForm';

export default function RegistroFinanceiro() {
  const [data, setData] = useState<Date>();
  const [dataVencimento, setDataVencimento] = useState<Date>();
  const [dataPagamento, setDataPagamento] = useState<Date>();

  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-4xl shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Registro financeiro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Coluna Esquerda */}
            <div className="space-y-4">
              {/* Data */}
              <div className="flex flex-col space-y-2">
                <DateInput label="Data" />
              </div>

              {/* Tipo */}
              <div className="flex flex-col space-y-2 w-full">
                <Label>Tipo</Label>
                <SelectInput
                  placeholder="Tipo"
                  label="Selecione"
                  options={[
                    { value: 'receita', name: 'Receita' },
                    { value: 'despesa', name: 'Despesa' },
                    { value: 'a_pagar', name: 'A pagar' },
                  ]}
                />
              </div>

              {/* Categoria */}
              <div className="flex flex-col space-y-2">
                <Label>Categoria</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veterinario">
                      Serviço veterinário
                    </SelectItem>
                    <SelectItem value="alimentacao">Alimentação</SelectItem>
                    <SelectItem value="doacao">Doação</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Valor */}
              <div className="flex flex-col space-y-2">
                <Label>Valor</Label>
                <Input type="number" placeholder="0,00" />
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-4">
              {/* Descrição */}
              <div className="flex flex-col space-y-2">
                <Label>Descrição</Label>
                <Input placeholder="Descrição" />
              </div>

              {/* Pago */}
              <div className="flex flex-col space-y-2">
                <Label>Pago</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="nao">Não</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Data vencimento */}
              <div className="flex flex-col space-y-2">
                <Label>Data vencimento</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-between">
                      {dataVencimento
                        ? format(dataVencimento, 'dd/MM/yyyy', { locale: ptBR })
                        : 'dd/mm/aaaa'}
                      <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dataVencimento}
                      onSelect={setDataVencimento}
                      locale={ptBR}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Data pagamento */}
              <div className="flex flex-col space-y-2">
                <Label>Data pagamento</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-between">
                      {dataPagamento
                        ? format(dataPagamento, 'dd/MM/yyyy', { locale: ptBR })
                        : 'dd/mm/aaaa'}
                      <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dataPagamento}
                      onSelect={setDataPagamento}
                      locale={ptBR}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Botão Salvar */}
          <div className="pt-6">
            <Button className="w-full bg-green-200 text-black hover:bg-green-300">
              Salvar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
