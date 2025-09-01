import '@/app/globals.css';
import Header from '@/app/layout/Header';
import Sidebar from '@/app/layout/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
