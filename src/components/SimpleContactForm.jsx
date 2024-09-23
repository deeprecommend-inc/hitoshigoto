import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SimpleContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Here you would typically handle form submission
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">お問い合わせ</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input type="text" placeholder="お名前" required />
          </div>
          <div>
            <Input type="email" placeholder="メールアドレス" required />
          </div>
          <div>
            <Textarea placeholder="お問い合わせ内容" rows={4} required />
          </div>
          <Button type="submit" className="w-full">送信</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SimpleContactForm;
