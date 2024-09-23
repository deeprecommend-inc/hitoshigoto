import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">めでぃかるえいどへようこそ</h1>
      <Card>
        <CardHeader>
          <CardTitle>会社概要</CardTitle>
        </CardHeader>
        <CardContent>
          <p>めでぃかるえいどは、医療分野における専門的なアドバイスと企業のマッチングを行う革新的なプラットフォームです。私たちは、医療の専門家と企業をつなぎ、より良い医療サービスの実現を支援しています。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;