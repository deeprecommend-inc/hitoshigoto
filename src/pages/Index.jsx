import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SimpleContactForm from '../components/SimpleContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">経営顧問の力を引き出し、<br />事業拡大・改善をサポート</h1>
          <p className="text-lg mb-8">ヒトシゴトは、企業と人材をマッチングする革新的な人材紹介サービスです。</p>
          <div className="flex justify-center space-x-4">
            <Button className="btn-primary">顧問を探す</Button>
            <Button variant="outline">顧問に登録</Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-title">サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "👥", title: "豊富な人材" },
              { icon: "🤝", title: "最適なマッチング" },
              { icon: "💼", title: "経験豊富な顧問" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-title">お問い合わせ</h2>
          <SimpleContactForm />
        </section>
      </main>
    </div>
  );
};

export default Index;