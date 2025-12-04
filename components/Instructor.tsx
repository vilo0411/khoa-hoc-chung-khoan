import React from 'react';

export const Instructor: React.FC = () => {
  return (
    <section id="giang-vien" className="w-full mt-10 scroll-mt-24">
      <div className="flex flex-col items-center gap-10 px-4 py-10 w-full max-w-[1280px] mx-auto">
        <div className="text-center">
          <h2 className="text-white text-[28px] md:text-[32px] font-bold leading-tight pb-3 pt-5">Gặp Gỡ Giảng Viên</h2>
          <p className="text-text-muted text-base font-normal leading-normal max-w-[720px] mx-auto">
            Với hơn 15 năm kinh nghiệm thực chiến trên thị trường, giảng viên của chúng tôi sẽ mang đến cho bạn những kiến thức sâu sắc và chiến lược đầu tư hiệu quả nhất.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center bg-surface-dark/50 border border-border-dark rounded-2xl p-8 w-full max-w-[900px] hover:border-primary/30 transition-colors shadow-lg">
          <div className="relative">
             <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></div>
             <img 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/50 shadow-2xl relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKSFHAJ76a5vWbAzquv_JiuPlcu0XOJGTZg-dsQ8wgnhpqTdxsdYoyWF1XVteTidQNazORHzfSh8-gi8wu7aDLaR5b6hj_2Cc6GMmvSL7QwWhudxKhaQlAMKWpXwPlJxS8hnGSBuBFHJ0vQuslEj-pwYLcpFXDU9-7wdB1v3Dw5IqsvfwutRLdensbYrXBRmL-4kROUuHVO-ZF5mtL6_i82_uDQTYg2ZHyGbDqlJMtz3zYy4wl2Nkklo4-AaleRwTSqBfCnD77hhc" 
              alt="David Trần - Instructor"
            />
          </div>
          
          <div className="flex flex-col gap-4 text-center md:text-left flex-1">
            <div>
                <h3 className="text-white text-3xl font-bold">David Trần</h3>
                <p className="text-primary text-base font-semibold uppercase tracking-wide mt-1">Chuyên Gia Phân Tích Đầu Tư Cấp Cao</p>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              David là một chuyên gia tài chính được công nhận với nhiều năm kinh nghiệm tại các quỹ đầu tư lớn trong và ngoài nước. Anh đã dẫn dắt hàng ngàn nhà đầu tư cá nhân đạt được tự do tài chính thông qua phương pháp phân tích độc đáo kết hợp giữa cơ bản và kỹ thuật, cùng sự kỷ luật trong quản lý rủi ro.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-white/90 mt-2">
              <div className="flex items-center gap-2 border border-border-dark bg-[#28392f]/50 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-primary hover:text-background-dark hover:border-primary transition-all cursor-default">
                <span className="material-symbols-outlined !text-lg">workspace_premium</span>
                <span>Chứng chỉ CFA Level 3</span>
              </div>
              <div className="flex items-center gap-2 border border-border-dark bg-[#28392f]/50 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-primary hover:text-background-dark hover:border-primary transition-all cursor-default">
                <span className="material-symbols-outlined !text-lg">school</span>
                <span>Thạc sĩ Tài chính (MBA)</span>
              </div>
              <div className="flex items-center gap-2 border border-border-dark bg-[#28392f]/50 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-primary hover:text-background-dark hover:border-primary transition-all cursor-default">
                <span className="material-symbols-outlined !text-lg">trending_up</span>
                <span>15+ Năm Kinh Nghiệm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};