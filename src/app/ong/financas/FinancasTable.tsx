'use client';

import { MoreVertical } from 'lucide-react';

export default function FinancasTable() {
  const dados = [
    {
      data: '05/05/2025',
      descricao: 'Vendas da feira',
      categoria: 'Vendas',
      valor: 400,
    },
    {
      data: '10/05/2025',
      descricao: 'Doações pix',
      categoria: 'Doação',
      valor: 350,
    },
    {
      data: '20/05/2025',
      descricao: 'Loja da Maria',
      categoria: 'Dindos',
      valor: 230,
    },
  ];

  const total = dados.reduce((acc, d) => acc + d.valor, 0);

  return (
    <div className="mt-6 w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">Data</th>
            <th className="p-2">Descrição</th>
            <th className="p-2">Categoria</th>
            <th className="p-2">Valor</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{item.data}</td>
              <td className="p-2">{item.descricao}</td>
              <td className="p-2">{item.categoria}</td>
              <td className="p-2">R$ {item.valor.toFixed(2)}</td>
              <td className="p-2">
                <MoreVertical className="w-5 h-5 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-2 font-bold">
        Total Receitas: R$ {total.toFixed(2)}
      </div>
    </div>
  );
}
