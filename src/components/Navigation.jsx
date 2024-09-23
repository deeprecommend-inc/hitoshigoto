import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">めでぃかるえいど</Link>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">ログイン</Link>
            <Link to="/register">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">新規登録</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
