import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ヒトシゴト</h3>
            <p>革新的な人材紹介サービスを提供</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">リンク</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">ホーム</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">会社概要</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">お問い合わせ</h4>
            <p>電話: 03-XXXX-XXXX</p>
            <p>メール: info@hitoshigoto.co.jp</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 ヒトシゴト All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;