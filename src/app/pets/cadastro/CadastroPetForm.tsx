'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@radix-ui/react-select';
import { SelectInput } from '@/app/components/inputs/SelectInputForm';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { InputFile } from '@/app/components/inputs/InputFile';
import { CameraIcon } from 'lucide-react';
import { createPet, updatePet } from '@/app/services/PetsService';
import Pet from '@/app/models/Pet';
import { useEffect } from 'react';

type CadastroPetFormProps = {
  initialData?: Pet;
};

const FormSchema = z.object({
  nome: z
    .string()
    .min(1, 'O nome é obrigatório')
    .max(50, 'O nome pode ter no máximo 50 caracteres'),
  especie: z.enum(['cao', 'gato']),
  sexo: z.enum(['macho', 'femea']),
  porte: z.enum(['pequeno', 'medio', 'grande']),
  idade: z.string(),
  informacoes: z.string().optional(),
  foto_url: z.string().optional(),
});

export function CadastroPetForm({ initialData }: CadastroPetFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: initialData?.nome || '',
      especie:
        initialData?.especie === 'cao' || initialData?.especie === 'gato'
          ? initialData.especie
          : undefined,
      sexo:
        initialData?.sexo === 'macho' || initialData?.sexo === 'femea'
          ? initialData.sexo
          : undefined,
      porte:
        initialData?.porte === 'pequeno' ||
        initialData?.porte === 'medio' ||
        initialData?.porte === 'grande'
          ? initialData.porte
          : undefined,
      idade: initialData?.idade || '',
      informacoes: initialData?.informacoes || '',
      foto_url: initialData?.foto_url || '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (initialData) {
      updatePet({ id: initialData.id, ...data })
        .then(() => {
          toast.success('Pet atualizado com sucesso!');
        })
        .catch(err => {
          console.error('Erro ao atualizar pet:', err);
          toast.error('Erro ao atualizar pet. Tente novamente.');
        });
    } else {
      createPet(data)
        .then(() => {
          toast.success('Pet cadastrado com sucesso!');
          form.reset();
        })
        .catch(err => {
          console.error('Erro ao cadastrar pet:', err);
          toast.error('Erro ao cadastrar pet. Tente novamente.');
        });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">
          {initialData ? 'Editar Pet' : 'Cadastrar Pet'}
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full px-4 gap-4 flex flex-col"
        >
          <div className="flex items-start justify-center mb-4">
            <FormField
              control={form.control}
              name="foto_url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {/* <CameraIcon /> */}
                    <InputFile />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sexo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sexo</FormLabel>
                    <FormControl>
                      <SelectInput
                        placeholder="Selecione o sexo"
                        label="Sexo"
                        options={[
                          { value: 'macho', name: 'Macho' },
                          { value: 'femea', name: 'Fêmea' },
                        ]}
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="porte"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Porte</FormLabel>
                    <FormControl>
                      <SelectInput
                        placeholder="Selecione o porte"
                        label="Porte"
                        options={[
                          { value: 'pequeno', name: 'Pequeno' },
                          { value: 'medio', name: 'Médio' },
                          { value: 'grande', name: 'Grande' },
                        ]}
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="especie"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Espécie</FormLabel>
                    <FormControl>
                      <SelectInput
                        placeholder="Selecione a espécie"
                        label="Espécie"
                        options={[
                          { value: 'cao', name: 'Cachorro' },
                          { value: 'gato', name: 'Gato' },
                        ]}
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idade</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="informacoes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Informações adicionais</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            className="bg-indigo-500 items-center mx-100 block cursor-pointer hover:bg-indigo-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Salvar
          </Button>
        </form>
      </Form>
    </Card>
  );
}
