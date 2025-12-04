import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Tôi là người mới chưa biết gì về chứng khoán có học được không?",
    answer: "Hoàn toàn được. Khóa học được thiết kế theo lộ trình từ cơ bản đến nâng cao (Module 1). Chúng tôi giải thích chi tiết các thuật ngữ, cách mở tài khoản và sử dụng phần mềm giao dịch, đảm bảo người mới bắt đầu có thể tiếp thu dễ dàng."
  },
  {
    question: "Thời gian học như thế nào? Tôi có thể xem lại bài giảng không?",
    answer: "Đối với khóa Online, bạn có thể học bất cứ lúc nào và xem lại video bài giảng trọn đời. Với khóa Offline/Hybrid, ngoài các buổi học trực tiếp, bạn cũng sẽ được cấp quyền truy cập vào kho video online để ôn tập không giới hạn."
  },
  {
    question: "Tôi cần chuẩn bị bao nhiêu vốn để bắt đầu đầu tư?",
    answer: "Thị trường chứng khoán không yêu cầu số vốn quá lớn để bắt đầu. Bạn có thể bắt đầu tập giao dịch với số vốn nhỏ (từ 2-5 triệu đồng) để làm quen với thị trường và kiểm soát tâm lý trước khi đầu tư số tiền lớn hơn."
  },
  {
    question: "Sau khóa học, tôi có được hỗ trợ thực hành không?",
    answer: "Có. Tất cả học viên đều được tham gia cộng đồng kín trên Zalo/Discord, nơi giảng viên và đội ngũ trợ giảng sẽ hỗ trợ giải đáp thắc mắc, nhận định thị trường hàng ngày và gợi ý các mã cổ phiếu tiềm năng trọn đời."
  },
  {
    question: "Khóa học có dạy về chứng khoán phái sinh không?",
    answer: "Khóa học này tập trung chính vào Chứng khoán cơ sở (Cổ phiếu). Tuy nhiên, các kiến thức về Phân tích kỹ thuật (Module 3) hoàn toàn có thể áp dụng hiệu quả cho giao dịch phái sinh. Chúng tôi cũng có các buổi workshop chuyên đề về Phái sinh dành riêng cho học viên."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section id="faq" className="w-full mt-10 scroll-mt-24" aria-labelledby="faq-heading">
      <div className="flex flex-col items-center gap-10 px-4 py-10 w-full max-w-[1280px] mx-auto">
        <div className="text-center">
          <h2 id="faq-heading" className="text-white text-[28px] md:text-[32px] font-bold leading-tight pb-3 pt-5">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-text-muted text-base font-normal leading-normal max-w-[720px] mx-auto">
            Giải đáp những thắc mắc phổ biến nhất của học viên về khóa học và đầu tư chứng khoán.
          </p>
        </div>

        <div className="w-full max-w-[800px] flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div 
                key={index}
                className={`bg-surface-dark/50 border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary shadow-[0_0_15px_rgba(17,212,98,0.1)]' : 'border-border-dark hover:border-primary/30'}`}
              >
                <h3>
                  <button
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-5 flex justify-between items-center text-left text-white hover:bg-surface-dark transition-colors"
                  >
                    <span className={`font-semibold text-base md:text-lg ${isOpen ? 'text-primary' : 'text-white'}`}>
                      {item.question}
                    </span>
                    <span className={`material-symbols-outlined transform transition-transform duration-300 ml-4 shrink-0 ${isOpen ? 'rotate-180 text-primary' : 'text-text-muted'}`}>
                      expand_more
                    </span>
                  </button>
                </h3>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  hidden={!isOpen}
                  className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-text-muted text-sm md:text-base leading-relaxed border-t border-border-dark/30">
                    {item.answer}
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