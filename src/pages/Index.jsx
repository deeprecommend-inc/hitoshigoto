import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">ヒトシゴト事業</h1>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} alt={`Hito Shigoto ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="mt-4 mb-6 text-center">
            ヒトシゴト事業は、あなたのスキルや経験を活かして収入を増やすチャンスを提供します。
          </p>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-2">顧問アドバイザーマッチングサービス</h2>
              <ul className="list-disc list-inside mb-4">
                <li>転職は考えていないがもう少し収入を増やしたい</li>
                <li>空き時間を使って効率よく収入を上げたい</li>
              </ul>
              <Link to="/advisor-matching">
                <Button>詳細を見る</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-2">企業様とアドバイザーマッチングサービス</h2>
              <ul className="list-disc list-inside mb-4">
                <li>自社のこの部門を効率よくしたい</li>
                <li>良い人材がいればもっと拡大出来るのに</li>
                <li>ITやSNSでの広告も使ってみたい</li>
              </ul>
              <Link to="/corporate-matching">
                <Button>詳細を見る</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
              <Input type="text" id="name" name="name" className="mt-1" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <Input type="email" id="email" name="email" className="mt-1" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
              <Textarea id="message" name="message" rows={4} className="mt-1" required />
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