import Header from '@/app/layout/Header';
import TabelaPets from '@/app/pets/TabelaPets';

export default function PetsPage() {
  return (
    <>
      <div className="flex items-start justify-center w-full min-h-screen bg-base-100">
        <div></div>
        <div className="w-full max-w-6xl mt-10">
          <TabelaPets />
        </div>
      </div>
    </>
  );
}
