import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-dark/30 border-t border-border-dark pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 text-white mb-6">
              <div className="size-8 text-primary">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l1.5-1.5L10 14l4-4 1.5 1.5L10 17l-3.5-3.5z"></path>
                </svg>
              </div>
              <h2 className="text-white text-2xl font-bold leading-tight">ProInvestor</h2>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Nền tảng đào tạo đầu tư chứng khoán hàng đầu, giúp bạn nắm vững kiến thức thực chiến và tự tin ra quyết định tài chính đúng đắn.
            </p>
            <div className="mt-6 space-y-3 text-text-muted text-sm">
              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="material-symbols-outlined !text-lg text-primary">location_on</span>
                <span>123 Đường Tài Chính, Quận 1, TP. Hồ Chí Minh</span>
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="material-symbols-outlined !text-lg text-primary">mail</span>
                <span>support@proinvestor.vn</span>
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="material-symbols-outlined !text-lg text-primary">call</span>
                <span>(028) 1234 5678</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Về chúng tôi</h3>
            <ul className="space-y-3">
              {['Giới thiệu', 'Đội ngũ giảng viên', 'Tuyển dụng', 'Liên hệ', 'Blog chia sẻ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Chính sách</h3>
            <ul className="space-y-3">
              {['Điều khoản sử dụng', 'Chính sách bảo mật', 'Chính sách hoàn tiền', 'Câu hỏi thường gặp'].map((item) => (
                 <li key={item}>
                  <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-text-muted text-xs">© 2024 ProInvestor. Đã đăng ký bản quyền.</p>
          <div className="flex gap-5">
            {[
              { icon: <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.713c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"></path> },
              { icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path> },
              { icon: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.701V8.115l6.06 4.03-6.06 4.03z"></path> }
            ].map((social, idx) => (
              <a key={idx} href="#" className="text-text-muted hover:text-primary hover:-translate-y-1 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};