import { Button } from '@/components/ui/button';
import { CadastroOngForm } from '../cadastro-ong/CadastroOngForm';
import Header from '../layout/Header';
import { LoginForm } from './LoginForm';

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="flex items-start justify-center w-full min-h-screen bg-base-200">
        <div></div>
        <div className="w-full max-w-4xl mt-20">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
