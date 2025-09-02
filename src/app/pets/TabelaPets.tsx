'use client';

import Image from 'next/image';
import { Edit, PlusIcon, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import React, { useEffect, useState } from 'react';
import { getPets, deletePet } from '@/app/services/PetsService';
import { error } from 'console';
import Pet from '../models/Pet';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function formatDate(iso?: string) {
  if (!iso) return '-';
  const d = new Date(iso);
  return d.toLocaleString();
}
type Props = {
  onEdit?: (pet: Pet) => void;
};

export default function TabelaPets({ onEdit }: Props) {
  const [pets, setPets] = useState<Pet[]>([]);
  const router = useRouter();

  useEffect(() => {
    getPets()
      .then(setPets)
      .catch(err => {
        console.error('Erro ao carregar pets:', err);
      });
  }, []);

  const handleClickCadastrar = () => {
    router.push('/pets/cadastro');
  };

  const handleClickEdit = (id: string) => {
    router.push(`/pets/editar/${id}`);
  };

  const handleClickDelete = (id: string) => {
    deletePet(id)
      .then(res => {
        setPets(prev => prev.filter(pet => pet.id !== id));
        toast.success('Registro deletado com sucesso!');
      })
      .catch(err => {
        console.error('Erro ao deletar registro:', err);
        toast.error('Erro ao deletar registro. Tente novamente.');
      });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Pets cadastrados</CardTitle>
          <Button
            className="bg-indigo-600 hover:cursor-pointer"
            onClick={handleClickCadastrar}
          >
            <div className="flex items-center gap-2">
              <PlusIcon />
              Cadastrar Pet
            </div>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>
            Lista de pets — foto, nome, status, criado em e ação.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24"></TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Espécie</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead className="text-right">Editar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pets.map(pet => (
              <TableRow key={pet.id}>
                <TableCell>
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                    <div className="text-sm text-muted-foreground">
                      Sem foto
                    </div>
                    {/* <div className="text-sm text-muted-foreground">
                      Sem foto
                    </div> */}
                    {/* {pet.foto_url ? (
                      <Image
                        src={pet.foto_url}
                        alt={pet.nome}
                        width={64}
                        height={64}
                        className="object-cover w-16 h-16"
                      />
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        Sem foto
                      </div>
                    )} */}
                  </div>
                </TableCell>
                <TableCell className="font-medium">{pet.nome}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      pet.status === 'disponivel'
                        ? 'outline'
                        : pet.status === 'adotado'
                          ? 'secondary'
                          : 'destructive'
                    }
                  >
                    {pet.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {pet.especie === 'gato' ? 'Gato' : 'Cachorro'}
                </TableCell>
                <TableCell>11/08/2025</TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleClickEdit(pet.id)}
                    aria-label={`Editar ${pet.nome}`}
                    className="inline-flex items-center gap-2 hover:cursor-pointer"
                  >
                    <Edit size={16} />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      handleClickDelete(pet.id);
                    }}
                    aria-label={`Deletar ${pet.nome}`}
                    className="inline-flex items-center gap-2 hover:cursor-pointer"
                  >
                    <Trash2 size={16} className="text-red-600" />
                    <span className="sr-only">Deletar</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
