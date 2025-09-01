import { CameraIcon, MessageCircle } from 'lucide-react';
import Header from '../layout/Header';

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 mt-10">Contate-nos</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          <div className="flex gap-2 items-center">
            <CameraIcon />
            <span>@pethelpsys</span>
          </div>
          <div className="flex gap-2 items-center">
            <MessageCircle />
            <span>{`(55) 99183-2203`}</span>
          </div>
        </p>
      </div>
    </>
  );
}
