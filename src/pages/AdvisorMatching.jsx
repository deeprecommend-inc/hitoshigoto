import React from 'react';
import { Button } from "@/components/ui/button";

const AdvisorMatching = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">顧問アドバイザーマッチングサービス</h1>
      <div className="mb-8">
        <img src="/image1.jpg" alt="Advisor Matching" className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg mb-4">
          ヒトシゴトの顧問アドバイザーマッチングサービスは、あなたのスキルと経験を活かして、効率的に収入を増やすチャンスを提供します。
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>月に4〜5時間、自分の「隙間」を有効活用</li>
          <li>オンラインやチャットでのやりとりなので自宅で、会社で、どこでも出来る</li>
          <li>月額アドバイザー料は1社5〜15万円</li>
          <li>自分の経験が、隙間時間が、副収入になる</li>
          <li>同時に数社とのアドバイザー契約も可能</li>
        </ul>
        <p className="mb-4">貴方の経験を、今、ほしい人がいます</p>
        <Button>アドバイザーとして登録</Button>
      </div>
    </div>
  );
};

export default AdvisorMatching;