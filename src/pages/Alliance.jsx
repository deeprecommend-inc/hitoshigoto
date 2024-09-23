import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Alliance = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">アライアンス</h1>
      <Card>
        <CardHeader>
          <CardTitle>パートナーシップのご案内</CardTitle>
        </CardHeader>
        <CardContent>
          <p>めでぃかるえいどは、医療分野における革新的なソリューションを提供するために、様々な企業や組織とのアライアンスを積極的に推進しています。私たちと共に、医療の未来を創造しませんか？</p>
          <p className="mt-4">アライアンスに関するお問い合わせは、<a href="/contact" className="text-blue-600 hover:underline">お問い合わせフォーム</a>よりご連絡ください。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alliance;