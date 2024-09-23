import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const AdvisorRegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">顧問登録</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">氏名 <span className="text-red-500">*</span></label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス <span className="text-red-500">*</span></label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号 <span className="text-red-500">*</span></label>
          <Input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">住所 <span className="text-red-500">*</span></label>
          <Input type="text" id="address" name="address" required />
        </div>
        <div>
          <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">得意分野（もしくは業種） <span className="text-red-500">*</span></label>
          <Select id="expertise" name="expertise">
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="internal_medicine">内科</SelectItem>
              <SelectItem value="surgery">外科</SelectItem>
              <SelectItem value="pediatrics">小児科</SelectItem>
              <SelectItem value="orthopedics">整形外科</SelectItem>
              <SelectItem value="other">その他</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">過去実績</label>
          <Textarea id="experience" name="experience" rows={3} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ <span className="text-red-500">*</span></label>
          <Textarea id="message" name="message" rows={4} required />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="privacy" required />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            <a href="/privacy-policy" className="text-blue-600 hover:underline">プライバシーポリシー</a>に同意します
          </label>
        </div>
      </div>
      <Button type="submit" className="w-full">登録する</Button>
    </form>
  );
};

export default AdvisorRegistrationForm;