import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">ヒトシゴト</Link>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">ホーム</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">会社概要</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;