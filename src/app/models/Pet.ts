export default class Pet {
  id: string;
  nome: string;
  especie: string;
  sexo: string;
  idade: string;
  porte: string;
  informacoes?: string | null;
  foto_url?: string | null;
  status: 'Disponível' | 'Adotado' | 'Em tratamento' | string;

  constructor(
    id: string,
    name: string,
    especie: string,
    sexo: string,
    idade: string,
    porte: string,
    informacoes: string | null,
    photoUrl: string | null,
    status: 'Disponível' | 'Adotado' | 'Em tratamento' | string
  ) {
    this.id = id;
    this.nome = name;
    this.especie = especie;
    this.sexo = sexo;
    this.idade = idade;
    this.porte = porte;
    this.informacoes = informacoes;
    this.foto_url = photoUrl;
    this.status = status;
  }
}
