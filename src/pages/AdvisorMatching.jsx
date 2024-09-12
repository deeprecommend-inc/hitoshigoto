import React from 'react';
import { Button } from "@/components/ui/button";

const AdvisorMatching = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">顧問アドバイザーマッチングサービス</h1>
      <div className="mb-8">
        <img src="https://source.unsplash.com/random/800x400?business,advisor" alt="Advisor Matching" className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg mb-4">
          ヒトシゴトの顧問アドバイザーマッチングサービスは、あなたのスキルと経験を活かして、効率的に収入を増やすチャンスを提供します。
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>転職は考えていないが、収入を増やしたい方に最適</li>
          <li>空き時間を有効活用して、効率よく収入アップ</li>
          <li>専門知識を活かして、企業にアドバイスを提供</li>
        </ul>
        <Button>アドバイザーとして登録</Button>
      </div>
    </div>
  );
};

export default AdvisorMatching;