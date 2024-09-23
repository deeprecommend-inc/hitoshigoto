import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">会社概要</h1>
      <Card>
        <CardHeader>
          <CardTitle>株式会社ヒトシゴト</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">ヒトシゴトは、革新的な人材紹介サービスを提供する企業です。私たちは、最新のテクノロジーと人間味のあるアプローチを組み合わせ、企業と求職者の最適なマッチングを実現しています。</p>
          <ul className="list-disc list-inside mb-4">
            <li>設立: 20XX年X月X日</li>
            <li>代表取締役: 山田 太郎</li>
            <li>所在地: 〒XXX-XXXX 東京都○○区△△ X-X-X</li>
            <li>事業内容: 人材紹介サービス、採用コンサルティング</li>
            <li>従業員数: XX名</li>
          </ul>
          <p>私たちのミッションは、「人と仕事の最適な出会いを創造し、社会に貢献する」ことです。このミッションのもと、日々サービスの向上に努めています。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;