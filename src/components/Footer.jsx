import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
            <p>お気軽にお電話ください</p>
            <p className="text-2xl font-bold">03-3275-6666</p>
            <p className="text-sm">受付時間：平日 9:00〜18:00</p>
          </div>
          <div>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              お問い合わせフォーム
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2023 めでぃかるえいど. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;