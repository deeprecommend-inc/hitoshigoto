import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "田中 太郎",
    role: "マーケティングコンサルタント",
    content: "ヒトシゴトのおかげで、私のスキルを活かしながら柔軟に働けるようになりました。素晴らしい経験です！",
    avatar: "/avatar1.jpg"
  },
  {
    name: "佐藤 花子",
    role: "財務アドバイザー",
    content: "複数の企業と関わることで、自身のキャリアも大きく成長しました。本当に感謝しています。",
    avatar: "/avatar2.jpg"
  },
  {
    name: "鈴木 一郎",
    role: "IT戦略コンサルタント",
    content: "空き時間を有効活用して副収入を得られるのが魅力です。やりがいのある仕事に巡り会えました。",
    avatar: "/avatar3.jpg"
  }
];

const AdvisorTestimonials = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center mb-6">アドバイザーの声</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdvisorTestimonials;