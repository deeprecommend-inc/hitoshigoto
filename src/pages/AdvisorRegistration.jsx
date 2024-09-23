import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdvisorRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">顧問アドバイザー登録</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">氏名</label>
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
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">住所</label>
              <Input type="text" id="address" name="address" required />
            </div>
            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">得意分野</label>
              <Select name="expertise">
                <SelectTrigger>
                  <SelectValue placeholder="得意分野を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="marketing">マーケティング</SelectItem>
                  <SelectItem value="finance">財務</SelectItem>
                  <SelectItem value="hr">人事</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
              <Textarea id="message" name="message" rows={4} />
            </div>
            <Button type="submit">登録する</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvisorRegistration;