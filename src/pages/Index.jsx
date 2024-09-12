import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">ヒトシゴト (Hito Shigoto)</h1>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">ヒトシゴト事業</h2>
          <p className="mb-4">
            ヒトシゴト事業は、あなたのスキルや経験を活かして収入を増やすチャンスを提供します。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">顧問アドバイザーマッチングサービス</h3>
              <ul className="list-disc list-inside">
                <li>転職は考えていないがもう少し収入を増やしたい</li>
                <li>空き時間を使って効率よく収入を上げたい</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">企業様とアドバイザーマッチングサービス</h3>
              <ul className="list-disc list-inside">
                <li>自社のこの部門を効率よくしたい</li>
                <li>良い人材がいればもっと拡大出来るのに</li>
                <li>ITやSNSでの広告も使ってみたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
          <form className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
              <Input type="text" id="name" name="name" className="mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <Input type="email" id="email" name="email" className="mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
              <Textarea id="message" name="message" rows={4} className="mt-1" />
            </div>
            <Button type="submit">送信</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-12">
        <div className="container mx-auto">
          <p>© 2023 ヒトシゴト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;