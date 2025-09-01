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

const FormSchema = z.object({
  nome: z.string(),
  especie: z.string(),
  sexo: z.string(),
  porte: z.string(),
  idade: z.string(),
  infos_adicionais: z.string().optional(),
  foto: z.string().optional(),
});

export function CadastroPetForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: '',
      especie: '',
      sexo: '',
      porte: '',
      idade: '',
      infos_adicionais: '',
      foto: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert('Form submitted successfully!');
    console.log('Form Data:', data);
    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">
          Cadastro de pet
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
              name="foto"
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
                name="infos_adicionais"
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
