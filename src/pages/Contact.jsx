import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
      <Card>
        <CardHeader>
          <CardTitle>お問い合わせフォーム</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">件名</label>
              <Input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" required />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                <a href="/privacy-policy" className="text-blue-600 hover:underline">プライバシーポリシー</a>に同意します
              </label>
            </div>
            <Button type="submit" className="w-full">送信する</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;