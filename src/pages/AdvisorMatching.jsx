import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AdvisorForm from '../components/AdvisorForm';
import AdvisorBenefits from '../components/AdvisorBenefits';
import AdvisorTestimonials from '../components/AdvisorTestimonials';

const AdvisorMatching = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">顧問アドバイザーマッチングサービス</h1>
      
      <div className="mb-12">
        <img src="/advisor-image.jpg" alt="Advisor Matching" className="w-full h-auto object-cover rounded-lg shadow-lg mb-8" />
        <Card>
          <CardHeader>
            <CardTitle>あなたのスキルを活かす新しい機会</CardTitle>
            <CardDescription>
              ヒトシゴトの顧問アドバイザーマッチングサービスは、あなたのスキルと経験を活かして、効率的に収入を増やすチャンスを提供します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>月に4〜5時間、自分の「隙間」を有効活用</li>
              <li>オンラインやチャットでのやりとりなので自宅で、会社で、どこでも出来る</li>
              <li>月額アドバイザー料は1社5〜15万円</li>
              <li>自分の経験が、隙間時間が、副収入になる</li>
              <li>同時に数社とのアドバイザー契約も可能</li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-lg font-semibold text-blue-600 mb-4">貴方の経験を、今、ほしい人がいます</p>
          </CardFooter>
        </Card>
      </div>

      <AdvisorForm />
      <AdvisorBenefits />
      <AdvisorTestimonials />
    </div>
  );
};

export default AdvisorMatching;
