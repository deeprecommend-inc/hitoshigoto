import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">ホーム</Link></li>
          <li><Link to="/advisor-matching" className="hover:underline">顧問アドバイザー</Link></li>
          <li><Link to="/corporate-matching" className="hover:underline">企業様向け</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;