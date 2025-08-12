import { PawPrintIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-10 bg-base-200 text-black">
      <div className="flex flex-col justify-center items-center">
        <PawPrintIcon />
        <h1 className="text-2xl font-extrabold">PetHelp</h1>
      </div>
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <a href="/" className="font-bold text-gray-800">
              Página Inicial
            </a>
          </li>
          <li>
            <a href="/about" className="font-bold text-gray-800">
              Sobre
            </a>
          </li>
          <li>
            <a href="/contact" className="font-bold text-gray-800">
              Contato
            </a>
          </li>
          <li>
            <a href="/" className="font-bold">
              <button className="btn bg-indigo-700 text-white rounded-md">
                Login
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
