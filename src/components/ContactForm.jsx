import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJSのサービスID
        'YOUR_TEMPLATE_ID', // EmailJSのテンプレートID
        formData,
        'YOUR_USER_ID' // EmailJSのユーザーID
      );
      toast.success('お問い合わせ送信が完了しました');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('送信に失敗しました。もう一度お試しください。');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">お問い合わせ</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="お名前"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="メールアドレス"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="お問い合わせ内容"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full">送信</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;