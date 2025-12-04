import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full" aria-label="Giới thiệu khóa học">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-5">
        <div 
          className="flex min-h-[520px] md:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end px-6 pb-12 md:px-16 md:pb-20 relative overflow-hidden group shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 34, 24, 0.2) 0%, rgba(16, 34, 24, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_BKoAsvCgxID8LRnCwo1ZGZpYt0gzy6Ub4ESkDy6MUsgnl2pTMIZgvtt-pRFgqnIvUfaD26LRdpkqXjh86V5V1M3VjI4tri_L-sNBotf_ea0-ax3Rft9SizgFr3xW7Nm_UJMvdZ3iVLNeFk3P63efiKqGZDHt3dDZW0dlyEXt1kL_uhFzLRpTE_Lkh-TIXTdMllouekG66GZNIBIlSlGjB-pHFKTR8K3wOQgTLbaGRkNTiqqmV567qLWduRPYf22rzQDdMrT8BQg")`
          }}
        >
          {/* Animated decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>

          <div className="relative flex flex-col gap-4 text-left max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Khóa học Best Seller 2025</span>
            </div>
            
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl drop-shadow-lg">
              Phân Tích Đầu Tư Chứng Khoán - Từ Cơ Bản Đến Chuyên Nghiệp
            </h1>
            <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-2xl drop-shadow-md">
              Nắm Vững Tương Lai Tài Chính Của Bạn. Khóa học toàn diện giúp bạn tự tin ra quyết định đầu tư thông minh và hiệu quả với lợi nhuận bền vững.
            </p>
          </div>

          <div className="relative flex flex-wrap gap-4 mt-2">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-wide hover:bg-white hover:text-background-dark transition-all duration-300 shadow-[0_0_20px_rgba(17,212,98,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1">
              <span className="truncate">Đăng Ký Ngay</span>
            </button>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-surface-dark/80 backdrop-blur-sm border border-white/20 text-white text-base font-bold leading-normal tracking-wide hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <span className="truncate">Tìm Hiểu Thêm</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};