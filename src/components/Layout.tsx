import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Leaf, 
  FileText, 
  MessageSquare, 
  Menu, 
  X,
  ChevronRight,
  LayoutDashboard,
  Settings,
  LogOut
} from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  isAdmin?: boolean;
}

export default function Layout({ children, isAdmin = false }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'HR Consulting', href: '#hr' },
    { name: 'ESG & Sustainability', href: '#esg' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  if (isAdmin) {
    return (
      <div className="flex min-h-screen bg-brand-dark">
        {/* Admin Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-brand-black p-6 hidden md:block">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">K</span>
            </div>
            <span className="font-bold text-xl tracking-tight">KHAN Admin</span>
          </div>
          
          <nav className="space-y-2">
            <AdminNavItem icon={<LayoutDashboard size={20} />} label="대시보드" active />
            <AdminNavItem icon={<MessageSquare size={20} />} label="상담 신청" count={3} />
            <AdminNavItem icon={<FileText size={20} />} label="콘텐츠 관리" />
            <AdminNavItem icon={<BarChart3 size={20} />} label="방문 통계" />
            <AdminNavItem icon={<Settings size={20} />} label="사이트 설정" />
          </nav>

          <div className="mt-auto pt-10">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <LogOut size={20} />
              <span>로그아웃</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center">
                <span className="font-bold text-white text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight">(주)칸 경영연구소</span>
                <span className="text-[10px] text-brand-purple font-semibold tracking-widest uppercase">KHAN Management Institute</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-brand-purple transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary py-2 px-4 text-sm">
                무료 상담 신청
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 p-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-lg font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full">무료 상담 신청</button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/5 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">K</span>
              </div>
              <span className="font-bold text-xl">(주)칸 경영연구소</span>
            </div>
            <p className="text-gray-400 max-w-md mb-8">
              인사제도 설계 및 ESG 경영 컨설팅을 통해 기업의 지속 가능한 성장을 돕는 프리미엄 경영 컨설팅 파트너입니다.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple transition-colors cursor-pointer">
                <span className="text-xs font-bold">Li</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple transition-colors cursor-pointer">
                <span className="text-xs font-bold">Ka</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-purple transition-colors">인사 전략 컨설팅</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">조직 최적화 진단</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">ESG 지속가능경영</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">탄소중립 전략</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>서울특별시 강남구 테헤란로</li>
              <li>02-1234-5678</li>
              <li>contact@khan-consulting.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          © 2026 (주)칸 경영연구소. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function AdminNavItem({ icon, label, active = false, count }: { icon: ReactNode, label: string, active?: boolean, count?: number }) {
  return (
    <a 
      href="#" 
      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
        active ? 'bg-brand-purple text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      {count && (
        <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </a>
  );
}
