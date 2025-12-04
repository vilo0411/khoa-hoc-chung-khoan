import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: 'foundation',
      title: 'Xây Dựng Nền Tảng Vững Chắc',
      description: 'Hiểu rõ các khái niệm cốt lõi về thị trường chứng khoán, từ cơ bản đến nâng cao, giúp bạn không bị lạc lối giữa rừng thông tin.'
    },
    {
      icon: 'monitoring',
      title: 'Phân Tích Chuyên Sâu',
      description: 'Thành thạo các công cụ phân tích kỹ thuật và cơ bản để đánh giá chính xác giá trị doanh nghiệp và thời điểm mua bán.'
    },
    {
      icon: 'rocket_launch',
      title: 'Chiến Lược Thực Tế',
      description: 'Áp dụng các chiến lược đầu tư đã được kiểm chứng để xây dựng danh mục phù hợp với mục tiêu tài chính của riêng bạn.'
    }
  ];

  return (
    <section id="gioi-thieu" className="w-full mt-10 scroll-mt-24">
      <div className="flex flex-col gap-10 px-4 py-10 w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-white text-[28px] md:text-[32px] font-bold leading-tight max-w-[720px]">
            Những Gì Bạn Sẽ Đạt Được
          </h1>
          <p className="text-text-muted text-base font-normal leading-normal max-w-[720px]">
            Trang bị đầy đủ kiến thức và kỹ năng để tự tin phân tích và lựa chọn cổ phiếu tiềm năng, quản lý danh mục đầu tư hiệu quả và tối ưu hóa lợi nhuận.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col gap-4 rounded-2xl border border-border-dark bg-surface-dark/50 p-6 hover:bg-surface-dark hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-[#28392f] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined !text-3xl text-primary">{feature.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">{feature.title}</h2>
                <p className="text-text-muted text-sm font-normal leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};