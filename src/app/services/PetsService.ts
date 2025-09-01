import Pet from '../models/Pet';

export async function getPets(): Promise<Pet[]> {
  const data = await fetch('http://localhost:3000/pets');
  const pets = await data.json();
  return pets;
}
