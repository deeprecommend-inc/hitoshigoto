import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdvisorForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Here you would typically handle form submission
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>アドバイザーとして登録</CardTitle>
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
            <Input type="tel" id="phone" name="phone" required />
          </div>
          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">専門分野</label>
            <Input type="text" id="expertise" name="expertise" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
            <Textarea id="message" name="message" rows={4} required />
          </div>
          <Button type="submit" className="w-full">登録する</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdvisorForm;