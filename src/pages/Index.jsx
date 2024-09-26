import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto mt-16 px-4">
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">経営顧問の力を引き出し、<br />事業拡大・改善をサポート</h1>
          <p className="text-xl mb-8 text-gray-600">ヒトシゴトは、企業と人材をマッチングする革新的な人材紹介サービスです。</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">顧問を探す</Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">顧問に登録</Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "👥", title: "豊富な人材", description: "多様な経験を持つ顧問が揃っています" },
              { icon: "🤝", title: "最適なマッチング", description: "企業のニーズに合わせた人材をご紹介" },
              { icon: "💼", title: "経験豊富な顧問", description: "各分野のエキスパートが在籍しています" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">お問い合わせ</h2>
          <p className="text-xl mb-8 text-gray-600">サービスに関するご質問やご相談はこちらから</p>
          <Link to="/contact">
            <Button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">お問い合わせはこちら</Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Index;