import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const JobSeekerRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">求職者登録</CardTitle>
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
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">職務経歴</label>
              <Textarea id="resume" name="resume" rows={4} required />
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">スキル</label>
              <Input type="text" id="skills" name="skills" required />
            </div>
            <Button type="submit">登録する</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobSeekerRegistration;