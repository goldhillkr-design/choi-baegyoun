import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Leaf, 
  ChevronRight, 
  ArrowUpRight,
  Target,
  ShieldCheck,
  Zap,
  Globe,
  MessageSquare,
  LayoutDashboard,
  FileText
} from 'lucide-react';
import Layout from './components/Layout';
import { useState, ReactNode } from 'react';

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return (
      <Layout isAdmin>
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold mb-2">관리자 대시보드</h1>
              <p className="text-gray-400">실시간 상담 현황 및 사이트 통계를 확인하세요.</p>
            </div>
            <button 
              onClick={() => setShowAdmin(false)}
              className="text-sm text-brand-purple hover:underline"
            >
              사이트로 돌아가기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard title="오늘 방문자" value="1,284" change="+12%" />
            <StatCard title="신규 상담 신청" value="3" change="+1" isAlert />
            <StatCard title="콘텐츠 조회수" value="45.2k" change="+5.4%" />
            <StatCard title="전환율" value="3.2%" change="+0.4%" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-card p-6">
              <h3 className="text-xl font-bold mb-6">최근 상담 신청 현황</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-sm">
                      <th className="pb-4 font-medium">신청자</th>
                      <th className="pb-4 font-medium">기업명</th>
                      <th className="pb-4 font-medium">서비스</th>
                      <th className="pb-4 font-medium">날짜</th>
                      <th className="pb-4 font-medium">상태</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-4">김철수</td>
                      <td className="py-4">(주)에이비씨</td>
                      <td className="py-4">인사제도 설계</td>
                      <td className="py-4">2026.03.28</td>
                      <td className="py-4"><span className="text-brand-purple">대기중</span></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4">이영희</td>
                      <td className="py-4">글로벌테크</td>
                      <td className="py-4">ESG 진단</td>
                      <td className="py-4">2026.03.27</td>
                      <td className="py-4"><span className="text-gray-400">완료</span></td>
                    </tr>
                    <tr>
                      <td className="py-4">박지민</td>
                      <td className="py-4">미래산업</td>
                      <td className="py-4">탄소중립 컨설팅</td>
                      <td className="py-4">2026.03.26</td>
                      <td className="py-4"><span className="text-brand-purple">대기중</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">주요 서비스 비중</h3>
              <div className="space-y-6">
                <ProgressItem label="인사 전략" value={45} color="bg-brand-purple" />
                <ProgressItem label="ESG 경영" value={30} color="bg-emerald-500" />
                <ProgressItem label="조직 진단" value={15} color="bg-blue-500" />
                <ProgressItem label="기타" value={10} color="bg-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section: The Imagination Storefront */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden atmosphere">
        <div className="glow-mesh" />
        
        {/* Floating Idea Orbs */}
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px]" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block mb-8">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.4em] uppercase text-brand-purple">
                The Imagination Store for Enterprises
              </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
              상상을 경영의 <br />
              <span className="purple-gradient-text">현실로 바꾸는 곳</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              (주)칸 경영연구소는 단순한 컨설팅을 넘어, <br className="hidden md:block" />
              기업의 미래를 진열하고 가치를 판매하는 <span className="text-white font-medium">상상력 점포</span>입니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-primary group">
                상상력 쇼핑하기 (서비스)
              </button>
              <button className="btn-secondary">
                연구소 투어 (소개)
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-purple to-transparent" />
        </motion.div>
      </section>

      {/* The Showcase: Services as Products */}
      <section id="hr" className="py-32 relative bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-brand-purple tracking-[0.5em] uppercase mb-6">Product 01: HR Innovation</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight">
                사람의 가치를 <br />
                <span className="text-display italic font-light">재정의하다</span>
              </h3>
            </div>
            <p className="text-gray-500 max-w-xs mt-8 md:mt-0">
              우리는 숫자가 아닌 가능성을 설계합니다. 성과주의를 넘어선 성장의 문화를 판매합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard 
              icon={<Target size={32} />}
              title="인사평가 체계"
              price="Custom Design"
              description="공정함을 넘어 동기부여를 창출하는 평가의 미학"
            />
            <ProductCard 
              icon={<Zap size={32} />}
              title="성과급 로직"
              price="Performance Driven"
              description="데이터가 증명하는 합리적인 보상의 알고리즘"
            />
            <ProductCard 
              icon={<Users size={32} />}
              title="조직 최적화"
              price="Structure Art"
              description="유기적으로 움직이는 미래형 조직의 골격"
            />
            <ProductCard 
              icon={<ShieldCheck size={32} />}
              title="경력개발 CDP"
              price="Growth Path"
              description="인재가 머물고 싶은 꿈의 지도를 그립니다"
            />
          </div>
        </div>
      </section>

      {/* Immersive ESG Section */}
      <section id="esg" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 -z-10 blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-24 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-black text-emerald-400 tracking-[0.5em] uppercase mb-8">Product 02: ESG Future</h2>
                <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  지속가능성을 <br />
                  <span className="purple-gradient-text">구독하세요</span>
                </h3>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                  ESG는 이제 의무가 아닌 생존의 필수 아이템입니다. 
                  칸 경영연구소의 상상력으로 탄소중립의 미래를 현실로 배송해 드립니다.
                </p>
                <div className="space-y-6">
                  <ESGTick label="글로벌 공시 가이드라인 완벽 대응" />
                  <ESGTick label="실질적인 탄소 배출 저감 로드맵" />
                  <ESGTick label="기업 가치를 높이는 임팩트 리포팅" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square glass-card flex flex-col items-center justify-center p-6 text-center group">
                    <Leaf className="text-emerald-400 mb-4 group-hover:scale-125 transition-transform" size={40} />
                    <div className="font-bold">Net Zero</div>
                  </div>
                  <div className="aspect-[3/4] glass-card flex flex-col items-center justify-center p-6 text-center group">
                    <Globe className="text-cyan-400 mb-4 group-hover:scale-125 transition-transform" size={40} />
                    <div className="font-bold">Global Compliance</div>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] glass-card flex flex-col items-center justify-center p-6 text-center group">
                    <BarChart3 className="text-brand-purple mb-4 group-hover:scale-125 transition-transform" size={40} />
                    <div className="font-bold">ESG Audit</div>
                  </div>
                  <div className="aspect-square glass-card flex flex-col items-center justify-center p-6 text-center group">
                    <FileText className="text-white mb-4 group-hover:scale-125 transition-transform" size={40} />
                    <div className="font-bold">Sustainability Report</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Gallery: Insights */}
      <section id="insights" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-brand-purple tracking-[0.5em] uppercase mb-6">The Gallery</h2>
            <h3 className="text-5xl md:text-7xl font-bold">상상의 조각들</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <GalleryItem 
              image="https://picsum.photos/seed/imagination1/800/1000"
              category="HR Insight"
              title="투명한 보상이 만드는 몰입의 마법"
            />
            <GalleryItem 
              image="https://picsum.photos/seed/imagination2/800/1000"
              category="ESG Trend"
              title="탄소중립, 비용이 아닌 투자의 관점에서"
              large
            />
            <GalleryItem 
              image="https://picsum.photos/seed/imagination3/800/1000"
              category="Case Study"
              title="전통 기업의 디지털 인사 혁신기"
            />
          </div>
        </div>
      </section>

      {/* Contact: Order Your Future */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
            className="glass-card p-12 md:p-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">미래를 주문하세요</h2>
            <p className="text-gray-400 text-lg mb-12">
              당신의 기업이 꿈꾸는 상상을 알려주세요. <br />
              칸 경영연구소가 가장 정교한 현실로 제작해 드립니다.
            </p>
            <form className="space-y-6 text-left max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput label="성함" />
                <FloatingInput label="휴대폰 번호" />
              </div>
              <FloatingInput label="이메일" />
              <FloatingTextarea label="문의 내용" />
              <button type="submit" className="btn-primary w-full mt-8">
                상담 예약하기
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Admin Toggle Button (For Demo) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setShowAdmin(true)}
          className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-purple hover:scale-110 transition-all shadow-2xl"
          title="관리자 대시보드 (데모)"
        >
          <LayoutDashboard size={24} />
        </button>
      </div>
    </Layout>
  );
}

function ProductCard({ icon, title, price, description }: { icon: ReactNode, title: string, price: string, description: string }) {
  return (
    <div className="glass-card p-8 flex flex-col h-full group">
      <div className="mb-8 text-brand-purple group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <div className="mt-auto">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">{price}</div>
        <h4 className="text-2xl font-bold mb-4">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ESGTick({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
        <ChevronRight size={14} />
      </div>
      <span className="text-gray-300 font-medium">{label}</span>
    </div>
  );
}

function GalleryItem({ image, category, title, large = false }: { image: string, category: string, title: string, large?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`group cursor-pointer ${large ? 'md:translate-y-12' : ''}`}
    >
      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-8">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-purple mb-3">{category}</div>
      <h4 className="text-2xl font-bold leading-tight group-hover:purple-gradient-text transition-all">{title}</h4>
    </motion.div>
  );
}

function FloatingInput({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">{label}</label>
      <input 
        type="text" 
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:bg-white/10 transition-all"
      />
    </div>
  );
}

function FloatingTextarea({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">{label}</label>
      <textarea 
        rows={4}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple focus:bg-white/10 transition-all resize-none"
      />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card p-8 hover:border-brand-purple/30 transition-all group">
      <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function ESGCard({ title, items, highlight = false }: { title: string, items: string[], highlight?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border transition-all ${
      highlight ? 'bg-brand-purple/10 border-brand-purple' : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
    }`}>
      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
        {highlight && <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse" />}
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
            <ChevronRight size={16} className="mt-0.5 text-emerald-500 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InsightCard({ category, title, date, image }: { category: string, title: string, date: string, image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-brand-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-brand-purple uppercase tracking-widest">
          {category}
        </div>
      </div>
      <h4 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors line-clamp-2">
        {title}
      </h4>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
}

function StatCard({ title, value, change, isAlert = false }: { title: string, value: string, change: string, isAlert?: boolean }) {
  return (
    <div className="glass-card p-6">
      <div className="text-sm text-gray-400 mb-2">{title}</div>
      <div className="flex items-end gap-3">
        <div className={`text-3xl font-bold ${isAlert ? 'text-brand-purple' : ''}`}>{value}</div>
        <div className="text-xs text-emerald-500 font-medium mb-1">{change}</div>
      </div>
    </div>
  );
}

function ProgressItem({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label}</span>
        <span className="font-bold">{value}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className={`h-full ${color}`} 
        />
      </div>
    </div>
  );
}
