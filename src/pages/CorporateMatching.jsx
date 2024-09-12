import React from 'react';
import { Button } from "@/components/ui/button";

const CorporateMatching = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">企業様とアドバイザーマッチングサービス</h1>
      <div className="mb-8">
        <img src="/image2.jpg" alt="Corporate Matching" className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg mb-4">
          ヒトシゴトの企業様向けマッチングサービスは、貴社のランクアップをお約束します。低コスト、手軽、なのに確実に成果を出せます。
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>その道のプロばかり、ハイスペックな人材ばかり</li>
          <li>1対1で深く聞ける</li>
          <li>相性、人柄...心配無用</li>
          <li>まずは無料で試せます</li>
          <li>オンライン、チャットでのやりとりでOK</li>
          <li>より深く、密に繋がる事も出来る！</li>
          <li>業務提携や幹部社員として迎えることも可能</li>
        </ul>
        <p className="mb-4">貴方の「したい」を叶えてくれる人達がいます</p>
        <Button>アドバイザーを探す</Button>
      </div>
    </div>
  );
};

export default CorporateMatching;