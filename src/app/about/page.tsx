import Header from '../layout/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Sobre o PetHelp</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          PetHelp é uma plataforma dedicada a conectar amantes de animais com
          serviços e informações úteis para o cuidado e bem-estar dos seus pets.
          Nossa missão é facilitar o acesso a recursos que ajudem na saúde,
          alimentação e treinamento dos animais de estimação.
        </p>
      </div>
    </>
  );
}
