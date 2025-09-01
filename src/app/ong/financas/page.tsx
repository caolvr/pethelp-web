'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FinancasTable from './FinancasTable';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div>
      {/* Saldo */}
      <div className="flex items-center justify-center gap-4 mb-6 mt-10">
        <span className="font-medium text-gray-600">Saldo:</span>
        <span className="text-xl font-bold text-gray-800">R$ 1.000,00</span>
        <div className="flex items-center gap-1 bg-green-100 text-gray-800 px-3 py-1 rounded-full">
          <TrendingUpIcon className="text-green-500 inline-block mr-2" />
          <span>Receitas</span>
          <span className="font-semibold">R$ 2000,00</span>
        </div>
        <div className="flex items-center gap-1 bg-red-100 text-gray-800 px-3 py-1 rounded-full">
          <TrendingDownIcon className="text-red-500 inline-block mr-2" />
          <span>Despesas</span>
          <span className="font-semibold">R$ 1000,00</span>
        </div>
      </div>

      {/* Botões principais */}
      {/* <div className="flex gap-4 mb-6">
        <Button className="bg-green-600 text-white">RECEITAS</Button>
        <Button variant="secondary">DESPESAS</Button>
        <Button variant="secondary">A PAGAR</Button>
        <Button variant="secondary">A RECEBER</Button>
        <Button variant="secondary">MOVIMENTAÇÕES</Button>
      </div> */}
      <div>
        <h1 className="font-bold text-xl text-gray-800">MOVIMENTAÇÕES</h1>
      </div>

      <Separator className="my-4" />
      {/* Filtros */}
      <div className="flex items-center gap-4 mb-6">
        <div>
          <span className="block text-sm font-medium">Período</span>
          <Select defaultValue="maio">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maio">Maio/2025</SelectItem>
              <SelectItem value="junho">Junho/2025</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <span className="block text-sm font-medium">Categoria</span>
          <Select defaultValue="todas">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="doacao">Doação</SelectItem>
              <SelectItem value="vendas">Vendas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-green-600 text-white mt-5">
          + Novo Registro
        </Button>
      </div>

      {/* Tabela */}
      <FinancasTable />
    </div>
  );
}
