import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <section id="lien-he" className="w-full my-10 scroll-mt-24">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="bg-surface-dark/50 border border-border-dark rounded-2xl flex flex-col items-center gap-6 p-8 md:p-14 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight relative z-10">
            Sẵn Sàng Chinh Phục Thị Trường?
          </h2>
          <p className="text-text-muted text-base font-normal leading-normal max-w-2xl relative z-10">
            Để lại thông tin của bạn bên dưới, đội ngũ tư vấn của ProInvestor sẽ liên hệ để giải đáp mọi thắc mắc và hỗ trợ bạn hoàn tất đăng ký trong thời gian sớm nhất.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mt-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Họ và Tên" 
              className="flex-1 h-12 px-4 rounded-xl bg-[#28392f] text-white border-border-dark focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-white/40 transition-all"
            />
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="flex-1 h-12 px-4 rounded-xl bg-[#28392f] text-white border-border-dark focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-white/40 transition-all"
            />
            <button 
              type="submit" 
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-background-dark text-base font-bold hover:bg-white hover:text-background-dark transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Gửi Thông Tin
            </button>
          </form>
          <p className="text-text-muted text-xs mt-2 relative z-10 opacity-60">
            *Chúng tôi cam kết bảo mật thông tin cá nhân của bạn.
          </p>
        </div>
      </div>
    </section>
  );
};