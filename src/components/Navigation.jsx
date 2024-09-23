import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">めでぃかるえいど</Link>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">ホーム</Link></li>
            <li><Link to="/cases" className="text-gray-600 hover:text-blue-600 transition-colors">事例</Link></li>
            <li><Link to="/advisor-registration" className="text-gray-600 hover:text-blue-600 transition-colors">アドバイザー登録</Link></li>
            <li><Link to="/corporate-registration" className="text-gray-600 hover:text-blue-600 transition-colors">企業様登録</Link></li>
            <li><Link to="/alliance" className="text-gray-600 hover:text-blue-600 transition-colors">アライアンス</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
