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
    "https://source.unsplash.com/random/1920x1080?business",
    "https://source.unsplash.com/random/1920x1080?office",
    "https://source.unsplash.com/random/1920x1080?meeting",
    "https://source.unsplash.com/random/1920x1080?teamwork",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img src={src} alt={`Hito Shigoto ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-5xl font-bold mb-6 text-white">ヒトシゴト事業</h1>
                      <p className="text-xl text-white mb-8">
                        あなたのスキルや経験を活かして収入を増やすチャンスを提供します。
                      </p>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        詳細を見る
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </section>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">顧問アドバイザーマッチングサービス</CardTitle>
                <CardDescription className="text-lg">効率的に収入を増やすチャンス</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
                  <li>転職は考えていないがもう少し収入を増やしたい</li>
                  <li>空き時間を使って効率よく収入を上げたい</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/advisor-matching">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">詳細を見る</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">企業様とアドバイザーマッチングサービス</CardTitle>
                <CardDescription className="text-lg">貴社のランクアップをお約束</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
                  <li>自社のこの部門を効率よくしたい</li>
                  <li>良い人材がいればもっと拡大出来るのに</li>
                  <li>ITやSNSでの広告も使ってみたい</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/corporate-matching">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">詳細を見る</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-600">お問い合わせ</CardTitle>
              <CardDescription className="text-lg">ご質問やご相談がございましたら、お気軽にお問い合わせください。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                  <Input type="text" id="name" name="name" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                  <Input type="email" id="email" name="email" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">メッセージ</label>
                  <Textarea id="message" name="message" rows={4} className="w-full" required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">送信</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">ヒトシゴト</h3>
              <p className="text-gray-300">あなたのスキルと経験を活かす、新しい働き方のプラットフォーム</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">ホーム</Link></li>
                <li><Link to="/advisor-matching" className="text-gray-300 hover:text-white transition-colors">顧問アドバイザー</Link></li>
                <li><Link to="/corporate-matching" className="text-gray-300 hover:text-white transition-colors">企業様向け</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">お問い合わせ</h3>
              <p className="text-gray-300">お気軽にご連絡ください</p>
              <p className="text-gray-300 mt-2">info@hitoshigoto.jp</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">© 2023 ヒトシゴト. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;