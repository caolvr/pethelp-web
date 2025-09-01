import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CameraIcon } from 'lucide-react';
export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <div className="flex items-center justify-center gap-2">
        <Label htmlFor="picture">Foto</Label>
        <CameraIcon className="text-gray-700" />
      </div>
      <Input className="cursor-pointer text-gray-700" id="file" type="file" />
    </div>
  );
}
