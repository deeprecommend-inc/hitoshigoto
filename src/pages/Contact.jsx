import React from 'react';
import SimpleContactForm from '../components/SimpleContactForm';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">お問い合わせ</h1>
      <div className="max-w-2xl mx-auto">
        <SimpleContactForm />
      </div>
    </div>
  );
};

export default Contact;