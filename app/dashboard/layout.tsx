import SideNav from '@/app/ui/dashboard/sidenav';

// 文件系统先读取 app/dashboard/layout.tsx，再读取 app/ui/dashboard/sidenav.tsx

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64"></div>
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
