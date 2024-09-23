import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CorporateMatching = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">企業様とアドバイザーマッチングサービス</h1>
      <div className="mb-12">
        <img src="/image2.jpg" alt="Corporate Matching" className="w-full h-96 object-cover rounded-lg shadow-lg mb-8" />
        <Card>
          <CardHeader>
            <CardTitle>貴社のランクアップをお約束</CardTitle>
            <CardDescription>
              ヒトシゴトの企業様向けマッチングサービスは、貴社のランクアップをお約束します。低コスト、手軽、なのに確実に成果を出せます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>その道のプロばかり、ハイスペックな人材ばかり</li>
              <li>1対1で深く聞ける</li>
              <li>相性、人柄...心配無用</li>
              <li>まずは無料で試せます</li>
              <li>オンライン、チャットでのやりとりでOK</li>
              <li>より深く、密に繋がる事も出来る！</li>
              <li>業務提携や幹部社員として迎えることも可能</li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-lg font-semibold text-blue-600 mb-4">貴方の「したい」を叶えてくれる人達がいます</p>
            <Button size="lg">アドバイザーを探す</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CorporateMatching;