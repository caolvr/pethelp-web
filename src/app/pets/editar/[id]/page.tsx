import { findPetById } from '@/app/services/PetsService';
import { CadastroPetForm } from '../../cadastro/CadastroPetForm';

export default async function EditPetPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const data = await findPetById(id);

  return (
    <>
      <div className="flex items-start justify-center w-full min-h-screen bg-base-200">
        <div></div>
        <div className="w-full max-w-6xl mt-10">
          <CadastroPetForm initialData={data}/>
        </div>
      </div>
    </>
  );
}
