import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const AdvisorAppeal = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">アドバイザー向けアピールポイント</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">経験を活かして、新たなチャンスを</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                これまでのお仕事で培われたご経験や人脈を活かして、アドバイザーとしての副収入ができたり、収入アップはもちろん、様々な企業経営社様や役員様と接することであなた自身の仕事のチャンスの広がりや知見を得ることにもつながります。
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">こんな方がヒトシゴトでお役に立ちます</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  'これまでの経験を使って副収入を得たい',
                  '人脈を利用して収入を増やしたい',
                  '月数回くらいでいいので、スキルを活かしたい',
                  '実際に会社に入ってみないとわからないので、まずはお試し(週1日程度)で入ってみたい'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 shadow-lg">
          <CardContent className="p-8">
            <p className="text-gray-600 mb-4 leading-relaxed">
              ご自身の経験やノウハウ、人脈が副収入に変えるほどではないと考えているあなたも大丈夫。最適なマッチングをご提供させていただきます。
            </p>
            <p className="text-gray-600 leading-relaxed">
              短期や副業という考えでも問題ありません。まずはお気軽にご相談ください。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdvisorAppeal;