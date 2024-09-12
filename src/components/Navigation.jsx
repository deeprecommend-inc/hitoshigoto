import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">ヒトシゴト</Link>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">ホーム</Link></li>
            <li><Link to="/advisor-matching" className="text-gray-600 hover:text-blue-600 transition-colors">顧問アドバイザー</Link></li>
            <li><Link to="/corporate-matching" className="text-gray-600 hover:text-blue-600 transition-colors">企業様向け</Link></li>
          </ul>
          <Button variant="outline">お問い合わせ</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;