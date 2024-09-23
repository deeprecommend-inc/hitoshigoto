import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import SimpleContactForm from '../components/SimpleContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-center text-blue-600">めでぃかるえいど</h1>
          <p className="mt-6 mb-8 text-center text-xl text-gray-600">
            医療分野における革新的なソリューションを提供し、患者ケアの向上と医療システムの効率化を実現します。
          </p>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>会社概要</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">めでぃかるえいどは、医療分野における革新的なソリューションを提供する企業です。私たちは、最新のテクノロジーと専門知識を活用し、医療機関や患者様のニーズに応える製品やサービスを開発しています。</p>
              <p className="mb-4">私たちのミッションは、医療の質を向上させ、患者様の生活の質を改善することです。そのために、医療機関との密接な連携を図り、常に最先端の医療技術とITを融合させたソリューションを提供しています。</p>
              <p>めでぃかるえいどは、医療の未来を創造し、より健康的で幸福な社会の実現に貢献します。</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>顧問アドバイザーマッチングサービス</CardTitle>
                <CardDescription>医療分野のプロフェッショナルとして活躍するチャンス</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>豊富な経験を活かして医療機関をサポート</li>
                  <li>柔軟な働き方で専門知識を提供</li>
                  <li>医療の質向上に貢献する機会</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/advisor-registration">
                  <Button>アドバイザー登録</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>企業様とアドバイザーマッチングサービス</CardTitle>
                <CardDescription>医療機関の課題解決をサポート</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>経験豊富なアドバイザーによる専門的なサポート</li>
                  <li>医療の質向上と効率化を実現</li>
                  <li>最新の医療トレンドに関する知見を獲得</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/corporate-registration">
                  <Button>企業様登録</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">お問い合わせ</h2>
          <SimpleContactForm />
        </section>
      </main>
    </div>
  );
};

export default Index;
