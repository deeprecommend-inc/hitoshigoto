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
          <h1 className="text-5xl font-bold mb-6 text-center text-blue-600">ヒトシゴト</h1>
          <p className="mt-6 mb-8 text-center text-xl text-gray-600">
            企業と人材をつなぐ革新的な人材紹介サービス
          </p>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>会社概要</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">ヒトシゴトは、企業と人材をマッチングする革新的な人材紹介サービスです。私たちは、企業の人材ニーズと求職者のキャリア目標を効率的に結びつけ、双方にとって価値ある関係性を構築します。</p>
              <p className="mb-4">私たちのミッションは、企業の成長を加速させ、個人のキャリアを最大限に支援することです。そのために、最先端のマッチング技術と丁寧なサポートを提供しています。</p>
              <p>ヒトシゴトは、ビジネスの未来を創造し、より効率的で革新的な労働市場の実現に貢献します。</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>求職者の方へ</CardTitle>
                <CardDescription>キャリアアップのチャンスがここに</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>豊富な求人情報</li>
                  <li>キャリアカウンセリング</li>
                  <li>スキルアップ支援</li>
                  <li>柔軟な働き方の提案</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/job-seeker-registration">
                  <Button>求職者登録</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>企業様へ</CardTitle>
                <CardDescription>最適な人材をご紹介します</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>豊富な人材データベース</li>
                  <li>効率的なマッチングシステム</li>
                  <li>採用コンサルティング</li>
                  <li>長期的なサポート</li>
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
