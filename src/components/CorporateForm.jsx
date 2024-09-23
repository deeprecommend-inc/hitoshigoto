import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const CorporateForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Corporate form submitted');
    // Here you would typically handle form submission
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>企業様お問い合わせフォーム</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">企業名</label>
            <Input type="text" id="companyName" name="companyName" required />
          </div>
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">担当者名</label>
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
            <Input type="url" id="website" name="website" />
          </div>
          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
            <Textarea id="inquiry" name="inquiry" rows={4} required />
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
  );
};

export default CorporateForm;