'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn(
        'h-screen bg-neutral-900 text-white transition-all duration-300',
        open ? 'w-56' : 'w-16'
      )}
    >
      <div className="flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          <Menu />
        </Button>
        {open && <span className="font-bold text-lg">Menu</span>}
      </div>

      <nav className="flex flex-col gap-2 p-2">
        <Button variant="ghost" className="justify-start text-white">
          Dashboard
        </Button>
        <Button variant="ghost" className="justify-start text-white">
          Financeiro
        </Button>
        <Button variant="ghost" className="justify-start text-white">
          Animais
        </Button>
      </nav>
    </div>
  );
}
