import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cases = () => {
  const cases = [
    { title: "新型医療機器の開発支援", content: "大手医療機器メーカーと専門医のマッチングにより、革新的な医療機器の開発に成功。" },
    { title: "地域医療の改善プロジェクト", content: "地方自治体と医療コンサルタントの協力で、地域の医療サービス向上を実現。" },
    { title: "医療AI導入事例", content: "AI専門家と病院のコラボレーションにより、診断精度の向上と業務効率化を達成。" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">事例紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cases;