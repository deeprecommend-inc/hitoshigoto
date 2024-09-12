import React from 'react';
import { Button } from "@/components/ui/button";

const CorporateMatching = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">企業様とアドバイザーマッチングサービス</h1>
      <div className="mb-8">
        <img src="https://source.unsplash.com/random/800x400?corporate,meeting" alt="Corporate Matching" className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg mb-4">
          ヒトシゴトの企業様向けマッチングサービスは、貴社の課題解決や成長戦略の実現をサポートする最適なアドバイザーをご紹介します。
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>特定部門の効率化を図りたい企業様に</li>
          <li>事業拡大に必要な人材を探している企業様に</li>
          <li>ITやSNSでの広告戦略を強化したい企業様に</li>
        </ul>
        <Button>アドバイザーを探す</Button>
      </div>
    </div>
  );
};

export default CorporateMatching;