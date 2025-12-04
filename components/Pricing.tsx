import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="hoc-phi" className="w-full mt-10 scroll-mt-24">
      <div className="flex flex-col items-center gap-10 px-4 py-10 w-full max-w-[1280px] mx-auto">
        <div className="text-center">
          <h2 className="text-white text-[28px] md:text-[32px] font-bold leading-tight pb-3 pt-5">Học Phí & Ưu Đãi</h2>
          <p className="text-text-muted text-base font-normal leading-normal max-w-[720px] mx-auto">
            Đầu tư vào kiến thức là khoản đầu tư sinh lời bền vững nhất. Chọn gói học phù hợp với bạn ngay hôm nay để nhận ưu đãi đặc biệt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[900px]">
          {/* Online Plan */}
          <div className="bg-surface-dark/50 border border-border-dark rounded-2xl p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300">
            <div className="text-center border-b border-border-dark pb-6">
              <h3 className="text-primary text-xl font-bold uppercase tracking-wider">Khóa Online</h3>
              <div className="mt-4 flex flex-col items-center">
                 <p className="text-white text-4xl font-black">4,999,000đ</p>
                 <p className="text-text-muted text-sm line-through mt-1">6,000,000đ</p>
                 <span className="mt-2 bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">-17% Ưu đãi</span>
              </div>
            </div>
            <ul className="space-y-4 text-white/90 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>Học mọi lúc mọi nơi qua video chất lượng cao</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>Truy cập tài liệu & slide bài giảng trọn đời</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>Tham gia cộng đồng học viên kín (Zalo/Discord)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>Hỗ trợ giải đáp thắc mắc 24/7 từ trợ giảng</span>
              </li>
            </ul>
            <button className="w-full mt-auto flex cursor-pointer items-center justify-center rounded-xl h-12 px-5 bg-[#28392f] text-white text-base font-bold hover:bg-[#3b5445] transition-all hover:scale-[1.02]">
              Đăng Ký Gói Online
            </button>
          </div>

          {/* Offline/Hybrid Plan - Highlighted */}
          <div className="bg-[#1c2720] border-2 border-primary rounded-2xl p-8 flex flex-col gap-6 relative shadow-[0_0_30px_rgba(17,212,98,0.15)] transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
              PHỔ BIẾN NHẤT
            </div>
            <div className="text-center border-b border-border-dark pb-6">
              <h3 className="text-primary text-xl font-bold uppercase tracking-wider">Khóa Offline / Hybrid</h3>
              <div className="mt-4 flex flex-col items-center">
                 <p className="text-white text-4xl font-black">7,999,000đ</p>
                 <p className="text-text-muted text-sm line-through mt-1">10,000,000đ</p>
                 <span className="mt-2 bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">-20% Ưu đãi</span>
              </div>
            </div>
            <ul className="space-y-4 text-white/90 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span className="font-bold">Toàn bộ quyền lợi gói Online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>8 buổi học trực tiếp tại lớp (hoặc Zoom Live)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>Tương tác 1-1, sửa lỗi trực tiếp cùng giảng viên</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>Networking, giao lưu cafe cùng các nhà đầu tư</span>
              </li>
               <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>Tặng gói tư vấn danh mục 1-1 trong 3 tháng</span>
              </li>
            </ul>
            <button className="w-full mt-auto flex cursor-pointer items-center justify-center rounded-xl h-12 px-5 bg-primary text-background-dark text-base font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25">
              Đăng Ký Gói Offline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};