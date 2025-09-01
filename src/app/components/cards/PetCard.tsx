'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type PetCardProps = {
  nome: string;
  idade: string;
  tipo: string;
  imagem: string;
};

export function PetCard({ nome, idade, tipo, imagem }: PetCardProps) {
  return (
    <Card className="w-64 rounded-2xl shadow-md">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={imagem}
            alt={nome}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold">{nome}</CardTitle>
        <p className="text-gray-600">
          {tipo}, {idade}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-indigo-500 hover:bg-indigo-600">
          Quero adotar
        </Button>
      </CardFooter>
    </Card>
  );
}
