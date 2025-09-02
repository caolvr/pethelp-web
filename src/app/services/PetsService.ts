import Pet from '../models/Pet';

const API_URL = 'http://localhost:3000/pets';

export async function getPets(): Promise<Pet[]> {
  const data = await fetch(API_URL);
  const pets = await data.json();
  return pets;
}

export async function createPet(pet: Partial<Pet>): Promise<Pet> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar pet');
  }

  return await response.json();
}

export async function findPetById(id: string): Promise<Pet> {
  const data = await fetch(API_URL + '/' + id);
  const pet = await data.json();
  return pet;
}

export async function updatePet(pet: Partial<Pet>): Promise<void> {
  const response = await fetch(API_URL + '/' + pet.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  });

  if (!response.ok) {
    throw new Error('Erro ao atualizar pet');
  }

  return await response.json();
}

export async function deletePet(id: string): Promise<string> {
  const response = await fetch(API_URL + '/' + id, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Erro ao deletar pet');
  }

  return 'Pet deletado com sucesso';
}
