import Header from '@/app/layout/Header';
import { CadastroOngForm } from './CadastroOngForm';

export default function CadastroOngPage() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex items-start justify-center w-full min-h-screen bg-base-200">
        <div></div>
        <div className="w-full max-w-6xl mt-10">
          <CadastroOngForm />
        </div>
      </div>
    </>
  );
}
