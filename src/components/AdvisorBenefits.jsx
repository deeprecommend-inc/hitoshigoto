import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const benefits = [
  "柔軟な働き方：自分のペースで仕事ができます",
  "高収入：専門知識を活かして高い報酬を得られます",
  "キャリア拡大：様々な企業との関わりでスキルアップできます",
  "ネットワーク構築：業界内での人脈を広げられます",
  "自己実現：自身の経験を活かして社会に貢献できます"
];

const AdvisorBenefits = () => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">アドバイザーになるメリット</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AdvisorBenefits;