import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const AdvisorForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Here you would typically handle form submission
  };

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">顧問登録</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lastName">姓</Label>
              <Input type="text" id="lastName" name="lastName" required />
            </div>
            <div>
              <Label htmlFor="firstName">名</Label>
              <Input type="text" id="firstName" name="firstName" required />
            </div>
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <Label htmlFor="phone">電話番号</Label>
            <Input type="tel" id="phone" name="phone" required />
          </div>
          <div>
            <Label htmlFor="expertise">専門分野</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="専門分野を選択してください" />
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
            <Label htmlFor="experience">経験年数</Label>
            <Input type="number" id="experience" name="experience" required />
          </div>
          <div>
            <Label htmlFor="message">メッセージ</Label>
            <Textarea id="message" name="message" rows={4} />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">利用規約に同意します</Label>
          </div>
          <Button type="submit" className="w-full">登録する</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdvisorForm;
