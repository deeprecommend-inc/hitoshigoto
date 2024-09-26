import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ヒトシゴト</h3>
            <p className="text-gray-400">革新的な人材紹介サービスを提供</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">リンク</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">ホーム</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">会社概要</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">お問い合わせ</h4>
            <p className="text-gray-400">電話: 03-XXXX-XXXX</p>
            <p className="text-gray-400">メール: info@hitoshigoto.co.jp</p>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 ヒトシゴト All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;