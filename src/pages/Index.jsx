import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const images = [
    "https://via.placeholder.com/1920x1080.png?text=Meeting",
    "https://via.placeholder.com/1920x1080.png?text=Teamwork",
    "https://via.placeholder.com/1920x1080.png?text=Business",
    "https://via.placeholder.com/1920x1080.png?text=Office",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-center text-blue-600">ヒトシゴト事業</h1>
          <Carousel className="w-full relative">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img src={src} alt={`Hito Shigoto ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </Carousel>
          <p className="mt-6 mb-8 text-center text-xl text-gray-600">
            ヒトシゴト事業は、あなたのスキルや経験を活かして収入を増やすチャンスを提供します。
          </p>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>顧問アドバイザーマッチングサービス</CardTitle>
                <CardDescription>効率的に収入を増やすチャンス</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>転職は考えていないがもう少し収入を増やしたい</li>
                  <li>空き時間を使って効率よく収入を上げたい</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/advisor-matching">
                  <Button>詳細を見る</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>企業様とアドバイザーマッチングサービス</CardTitle>
                <CardDescription>貴社のランクアップをお約束</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>自社のこの部門を効率よくしたい</li>
                  <li>良い人材がいればもっと拡大出来るのに</li>
                  <li>ITやSNSでの広告も使ってみたい</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/corporate-matching">
                  <Button>詳細を見る</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
              <CardDescription>ご質問やご相談がございましたら、お気軽にお問い合わせください。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
                    <Input type="text" id="name" name="name" className="mt-1" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
                    <Input type="email" id="email" name="email" className="mt-1" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
                    <Textarea id="message" name="message" rows={4} className="mt-1" required />
                  </div>
                </div>
                <Button type="submit" className="mt-4">送信</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ヒトシゴト</h3>
              <p>あなたのスキルと経験を活かす、新しい働き方のプラットフォーム</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-400">ホーム</Link></li>
                <li><Link to="/advisor-matching" className="hover:text-blue-400">顧問アドバイザー</Link></li>
                <li><Link to="/corporate-matching" className="hover:text-blue-400">企業様向け</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
              <p>お気軽にご連絡ください</p>
              <p className="mt-2">info@hitoshigoto.jp</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2023 ヒトシゴト. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;