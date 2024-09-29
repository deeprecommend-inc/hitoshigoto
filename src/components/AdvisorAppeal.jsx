import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdvisorAppeal = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">アドバイザー向けアピールポイント</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>経験を活かして、新たなチャンスを</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              これまでのお仕事で培われたご経験や人脈を活かして、アドバイザーとしての副収入ができたり、収入アップはもちろん、様々な企業経営社様や役員様と接することであなた自身の仕事のチャンスの広がりや知見を得ることにもつながります。
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>こんな方がヒトシゴトでお役に立ちます</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>これまでの経験を使って副収入を得たい</li>
              <li>人脈を利用して収入を増やしたい</li>
              <li>月数回くらいでいいので、スキルを活かしたい</li>
              <li>実際に会社に入ってみないとわからないので、まずはお試し(週1日程度)で入ってみたい</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="mb-4">
              ご自身の経験やノウハウ、人脈が副収入に変えるほどではないと考えているあなたも大丈夫。最適なマッチングをご提供させていただきます。
            </p>
            <p className="mb-4">
              短期や副業という考えでも問題ありません。まずはお気軽にご相談ください。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdvisorAppeal;