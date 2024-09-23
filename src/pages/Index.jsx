import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AdvisorRegistrationForm from '../components/AdvisorRegistrationForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">めでぃかるえいどへようこそ</h1>
          <p className="text-center text-gray-600 mb-8">医療分野における専門的なアドバイスと企業のマッチングを行う革新的なプラットフォーム</p>
          <div className="flex justify-center">
            <img src="/medical-image.jpg" alt="Medical professionals" className="w-full max-w-4xl rounded-lg shadow-lg" />
          </div>
        </div>
        <AdvisorRegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
