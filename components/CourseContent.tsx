import React, { useState } from 'react';
import { Module } from '../types';

const COURSE_DATA: Module[] = [
  {
    id: 'm1',
    title: 'Module 1: Nhập Môn Thị Trường Chứng Khoán',
    lessons: [
      { id: '1.1', title: 'Tổng quan về Thị trường Chứng khoán', description: 'Giới thiệu các khái niệm cơ bản, vai trò của thị trường.', duration: '15 phút' },
      { id: '1.2', title: 'Các thuật ngữ phổ biến', description: 'Giải thích các thuật ngữ như Cổ phiếu, Trái phiếu, ETF, Bull/Bear market.', duration: '25 phút' },
      { id: '1.3', title: 'Hướng dẫn sử dụng nền tảng giao dịch', description: 'Thực hành đặt lệnh mua/bán, đọc bảng giá, thiết lập watchlist.', duration: '20 phút' },
      { id: '1.4', title: 'Tư duy đúng trong đầu tư', description: 'Phân biệt đầu tư và đầu cơ, xác định mục tiêu tài chính dài hạn.', duration: '20 phút' }
    ]
  },
  {
    id: 'm2',
    title: 'Module 2: Phân Tích Cơ Bản (FA)',
    lessons: [
      { id: '2.1', title: 'Đọc hiểu Báo cáo Tài chính', description: 'Phân tích Bảng cân đối kế toán, Báo cáo kết quả kinh doanh, Lưu chuyển tiền tệ.', duration: '45 phút' },
      { id: '2.2', title: 'Các chỉ số tài chính quan trọng', description: 'Tìm hiểu P/E, P/B, EPS, ROE, ROA và cách ứng dụng trong việc lọc cổ phiếu.', duration: '40 phút' },
      { id: '2.3', title: 'Định giá cổ phiếu', description: 'Các phương pháp định giá phổ biến: DCF, P/E so sánh, P/B so sánh.', duration: '50 phút' },
      { id: '2.4', title: 'Phân tích vĩ mô & ngành', description: 'Tác động của lãi suất, lạm phát và chu kỳ kinh tế đến thị trường.', duration: '35 phút' }
    ]
  },
  {
    id: 'm3',
    title: 'Module 3: Phân Tích Kỹ Thuật (TA)',
    lessons: [
      { id: '3.1', title: 'Lý thuyết Dow và Xu hướng thị trường', description: 'Xác định xu hướng cấp 1, cấp 2 và các giai đoạn của thị trường.', duration: '30 phút' },
      { id: '3.2', title: 'Đọc biểu đồ nến Nhật', description: 'Nhận diện các mẫu nến đảo chiều (Hammer, Engulfing) và tiếp diễn quan trọng.', duration: '45 phút' },
      { id: '3.3', title: 'Các chỉ báo kỹ thuật phổ biến', description: 'Sử dụng MA, RSI, MACD, Bollinger Bands để tìm điểm mua/bán tối ưu.', duration: '50 phút' },
      { id: '3.4', title: 'Hỗ trợ và Kháng cự', description: 'Cách xác định các vùng cản tâm lý và điểm breakout uy tín.', duration: '35 phút' }
    ]
  },
  {
    id: 'm4',
    title: 'Module 4: Quản Trị Vốn & Tâm Lý',
    lessons: [
      { id: '4.1', title: 'Phân bổ tài sản và Đa dạng hóa', description: 'Xây dựng danh mục phù hợp với khẩu vị rủi ro, không "bỏ trứng một giỏ".', duration: '35 phút' },
      { id: '4.2', title: 'Quản lý rủi ro & Cắt lỗ', description: 'Các nguyên tắc cắt lỗ (Stoploss), chốt lời (Take Profit) và bảo toàn vốn.', duration: '30 phút' },
      { id: '4.3', title: 'Kiểm soát tâm lý giao dịch', description: 'Vượt qua nỗi sợ hãi và lòng tham (FOMO) trong đầu tư.', duration: '30 phút' }
    ]
  },
  {
    id: 'm5',
    title: 'Module 5: Thực Chiến & Nâng Cao (Mới)',
    lessons: [
      { id: '5.1', title: 'Xây dựng hệ thống giao dịch cá nhân', description: 'Tổng hợp FA và TA để tạo ra bộ quy tắc mua bán nhất quán.', duration: '50 phút' },
      { id: '5.2', title: 'Case Study: Phân tích cổ phiếu thực tế', description: 'Thực hành phân tích 3 mã cổ phiếu hot nhất thị trường hiện tại.', duration: '60 phút' },
      { id: '5.3', title: 'Tổng kết và Lộ trình tiếp theo', description: 'Hướng dẫn tự học và phát triển sau khóa học.', duration: '20 phút' }
    ]
  }
];

export const CourseContent: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string | null>('m1');

  const toggleModule = (id: string) => {
    setActiveModuleId(prev => prev === id ? null : id);
  };

  return (
    <section id="noi-dung" className="w-full mt-10 scroll-mt-24" aria-label="Nội dung chi tiết khóa học">
      <div className="flex flex-col items-center gap-10 px-4 py-10 w-full max-w-[1280px] mx-auto">
        <div className="text-center">
          <h2 className="text-white text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
            Nội Dung Khóa Học Chi Tiết
          </h2>
          <p className="text-text-muted text-base font-normal leading-normal max-w-[720px] mx-auto">
            Lộ trình học tập được thiết kế bài bản, đi từ những kiến thức nền tảng nhất đến các kỹ năng phân tích chuyên sâu, được cập nhật liên tục với thực tế thị trường.
          </p>
        </div>

        <div className="w-full max-w-[800px] space-y-4" role="list">
          {COURSE_DATA.map((module) => {
            const isOpen = activeModuleId === module.id;
            const headerId = `module-header-${module.id}`;
            const contentId = `module-content-${module.id}`;

            return (
              <div 
                key={module.id} 
                className={`bg-surface-dark/50 border transition-colors duration-300 rounded-xl overflow-hidden ${isOpen ? 'border-primary shadow-[0_0_15px_rgba(17,212,98,0.1)]' : 'border-border-dark hover:border-primary/50'}`}
                role="listitem"
              >
                <h3>
                  <button 
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleModule(module.id)}
                    className={`w-full p-5 flex justify-between items-center text-left transition-colors ${isOpen ? 'bg-[#28392f]' : 'hover:bg-[#28392f]/50'}`}
                  >
                    <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-white'}`}>
                      {module.title}
                    </span>
                    <span className={`material-symbols-outlined transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-text-muted'}`}>
                      expand_more
                    </span>
                  </button>
                </h3>

                <div 
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <ul className="divide-y divide-border-dark bg-[#1c2720]/30">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id} className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-white/5 transition-colors gap-2 sm:gap-0">
                          <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-0.5" aria-hidden="true">play_circle</span>
                            <div>
                              <p className="text-white text-sm font-medium">{lesson.title}</p>
                              <p className="text-text-muted text-xs mt-1">{lesson.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pl-9 sm:pl-0">
                            <span className="material-symbols-outlined text-text-muted text-[18px]" aria-hidden="true">schedule</span>
                            <span className="text-text-muted text-sm whitespace-nowrap">{lesson.duration}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};