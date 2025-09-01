export default class Pet {
  id: string;
  nome: string;
  especie: string;
  foto_url?: string | null;
  status: 'Disponível' | 'Adotado' | 'Em tratamento' | string;

  constructor(
    id: string,
    name: string,
    especie: string,
    photoUrl: string | null,
    status: 'Disponível' | 'Adotado' | 'Em tratamento' | string
  ) {
    this.id = id;
    this.nome = name;
    this.especie = especie;
    this.foto_url = photoUrl;
    this.status = status;
  }
}
