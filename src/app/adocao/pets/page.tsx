import { PetCard } from '@/app/components/cards/PetCard';
import { SelectDefault } from '@/app/components/inputs/SelectDefault';
import { SelectInput } from '@/app/components/inputs/SelectInputForm';
import Header from '@/app/layout/Header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const mockData = [
  {
    id: 1,
    name: 'Nina',
    species: 'Gato',
    age: '1 ano',
    image: '/img/nina.jpg',
  },
  {
    id: 2,
    name: 'Bento',
    species: 'Cachorro',
    age: '2 anos',
    image: '/img/bento.jpg',
  },
  {
    id: 3,
    name: 'Luke',
    species: 'Cachorro',
    age: '6 meses',
    image: '/img/luke.jpg',
  },
  {
    id: 4,
    name: 'Laranjo',
    species: 'Gato',
    age: '4 anos',
    image: '/img/laranjo.jpg',
  },
  {
    id: 6,
    name: 'Nina',
    species: 'Gato',
    age: '1 ano',
    image: '/img/nina.jpg',
  },
  {
    id: 7,
    name: 'Bento',
    species: 'Cachorro',
    age: '2 anos',
    image: '/img/bento.jpg',
  },
  {
    id: 8,
    name: 'Luke',
    species: 'Cachorro',
    age: '6 meses',
    image: '/img/luke.jpg',
  },
  {
    id: 9,
    name: 'Laranjo',
    species: 'Gato',
    age: '4 anos',
    image: '/img/laranjo.jpg',
  },
];

export default function PetsDisponiveisPage() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-base-100">
        <div className="flex items-start justify-center gap-6">
          {/* grids */}
          <div className="grid grid-cols-4 gap-8">
            {mockData.map(pet => (
              <PetCard
                key={pet.id}
                nome={pet.name}
                idade={pet.age}
                tipo={pet.species}
                imagem={pet.image}
              />
            ))}
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <h1 className="text-gray-800 font-semibold">Filtros</h1>
              <span className="text-sm text-gray-600">Limpar</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <SelectDefault
                placeholder="Selecione a cidade"
                label="Cidade"
                options={[{ value: 'santarosa', name: 'Santa Rosa' }]}
              />
              <SelectDefault
                placeholder="ONG"
                label="ONG"
                options={[
                  { value: 'amigan', name: 'Amigan' },
                  { value: 'focinho', name: 'Focinho Amigo' },
                ]}
              />
              <SelectDefault
                placeholder="Espécie"
                label="Espécie"
                options={[
                  { value: 'cao', name: 'Cachorro' },
                  { value: 'gato', name: 'Gato' },
                ]}
              />
              <SelectDefault
                placeholder="Porte"
                label="Porte"
                options={[
                  { value: 'pequeno', name: 'Pequeno' },
                  { value: 'medio', name: 'Médio' },
                  { value: 'grande', name: 'Grande' },
                ]}
              />
              <SelectDefault
                placeholder="Idade"
                label="Idade"
                options={[
                  { value: 'filhote', name: 'Filhote' },
                  { value: 'adulto', name: 'Adulto' },
                ]}
              />
              <Button
                className="bg-gray-600 w-[100px] cursor-pointer hover:bg-indigo-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Pesquisar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
