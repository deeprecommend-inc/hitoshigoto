import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall } from 'lucide-react';
import SimpleContactForm from '../components/SimpleContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-16">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">経営顧問の力を引き出し、<br />事業拡大・改善をサポート</h2>
              <p className="text-lg mb-8">ヒトシゴトは、企業と人材をマッチングする革新的な人材紹介サービスです。</p>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-blue-600 text-white">顧問を探す</Button>
                <Button variant="outline">顧問に登録</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/advisor1.jpg" alt="Advisor 1" className="w-full h-full object-cover" />
              <img src="/advisor2.jpg" alt="Advisor 2" className="w-full h-full object-cover" />
              <img src="/advisor3.jpg" alt="Advisor 3" className="w-full h-full object-cover" />
              <img src="/advisor4.jpg" alt="Advisor 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">事例紹介</h2>
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">経営課題を解決したい</h3>
                <p>経営課題の解決に向けて、専門家のアドバイスを受けられます。</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">新規事業を立ち上げたい</h3>
                <p>新規事業の立ち上げに関する戦略立案や実行支援を行います。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">実績紹介</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">国内最大の経営者データベース</h3>
              <p className="text-lg mb-4">30,000名超の経営者データを保有しています。</p>
            </div>
            <div>
              <img src="/database-image.jpg" alt="Database" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">サービスの特徴</h2>
          <div className="grid grid-cols-4 gap-8">
            {[
              { icon: "👥", title: "豊富な人材" },
              { icon: "🤝", title: "マッチング" },
              { icon: "💼", title: "経験豊富" },
              { icon: "🌟", title: "高品質" },
              { icon: "📊", title: "データ分析" },
              { icon: "🔒", title: "セキュリティ" },
              { icon: "📝", title: "契約サポート" },
              { icon: "🌐", title: "グローバル" },
              { icon: "📚", title: "教育支援" },
              { icon: "💡", title: "イノベーション" },
              { icon: "📈", title: "成長支援" },
              { icon: "🤖", title: "AI活用" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">顧問紹介</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: "山田 太郎", role: "経営戦略アドバイザー", image: "/advisor1.jpg" },
              { name: "鈴木 花子", role: "マーケティング専門家", image: "/advisor2.jpg" },
              { name: "佐藤 次郎", role: "財務コンサルタント", image: "/advisor3.jpg" },
            ].map((advisor, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={advisor.image} alt={advisor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="font-semibold">{advisor.name}</h3>
                  <p className="text-gray-600">{advisor.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button>顧問一覧を見る</Button>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">顧問をお探しの方</h3>
                <p className="mb-4">経営課題の解決に向けて、最適な顧問をご紹介します。</p>
                <Button>顧問を探す</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">顧問に登録したい方</h3>
                <p className="mb-4">あなたの経験とスキルを活かして、企業の成長をサポートしませんか？</p>
                <Button>顧問に登録</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
          <SimpleContactForm />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ヒトシゴト</h3>
              <p>革新的な人材紹介サービスを提供</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">サービス</h4>
              <ul>
                <li><Link to="/services" className="hover:text-blue-300">顧問紹介</Link></li>
                <li><Link to="/services" className="hover:text-blue-300">人材紹介</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">会社情報</h4>
              <ul>
                <li><Link to="/about" className="hover:text-blue-300">会社概要</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">法的情報</h4>
              <ul>
                <li><Link to="/privacy-policy" className="hover:text-blue-300">プライバシーポリシー</Link></li>
                <li><Link to="/terms" className="hover:text-blue-300">利用規約</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 ヒトシゴト All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
