import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CorporateRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">企業様登録</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">企業名</label>
              <Input type="text" id="companyName" name="companyName" required />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">担当者</label>
              <Input type="text" id="contactPerson" name="contactPerson" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
              <Input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">ホームページアドレス</label>
              <Input type="url" id="website" name="website" required />
            </div>
            <div>
              <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
              <Textarea id="inquiry" name="inquiry" rows={4} required />
            </div>
            <Button type="submit">登録する</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CorporateRegistration;