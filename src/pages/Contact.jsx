import React from 'react';
import SimpleContactForm from '../components/SimpleContactForm';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="page-title">お問い合わせ</h1>
      <p className="page-subtitle">サービスに関するご質問やご相談はこちらからお願いいたします。</p>
      <div className="max-w-2xl mx-auto">
        <SimpleContactForm />
      </div>
    </div>
  );
};

export default Contact;