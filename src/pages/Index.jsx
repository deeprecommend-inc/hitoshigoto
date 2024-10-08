import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AdvisorAppeal from '../components/AdvisorAppeal';
import ClientAppeal from '../components/ClientAppeal';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main>
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">経営顧問の力を引き出し、<br />事業拡大・改善をサポート</h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto">ヒトシゴトは、企業と人材をマッチングする革新的な人材紹介サービスです。</p>
            <div className="flex justify-center space-x-6">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
                顧問を探す
              </Button>
              <Button variant="outline" className="border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                顧問に登録
              </Button>
            </div>
          </div>
        </section>

        <AdvisorAppeal />
        <ClientAppeal />

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">お問い合わせ</h2>
            <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">サービスに関するご質問やご相談はこちらから</p>
            <Link to="/contact">
              <Button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                お問い合わせはこちら
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;