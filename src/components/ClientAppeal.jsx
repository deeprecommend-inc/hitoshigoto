import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Users, Briefcase } from 'lucide-react';

const ClientAppeal = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">クライアント(企業)向けアピールポイント</h2>
        <Card className="shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600">ヒトシゴトのサービスの特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                { icon: DollarSign, text: '月額10万円からご利用可能（税別）※ご利用内容などにより変動あり' },
                { icon: Users, text: '人脈、経験、ノウハウを持った人材を安価で活用することが出来ます。' },
                { icon: Briefcase, text: 'このクラスの人材を社員や役員として採用するとなると高額な報酬(年収は最低1500万以上)が必要。' },
                { icon: CheckCircle, text: '非常勤として定期的なオンラインミーティングで知恵や人脈を吸収することが可能。それをローコストで活用できる。' },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="mr-3 h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">多角的な視点とシナジー効果</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                同時に5～10人のアドバイザーを入れ替えながら活用してる企業もあります。複数のアドバイザーを同時に活用することで、広範な視点や専門的な知識を多角的に得ることができ、シナジー効果が期待できます。
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">長期的な協力関係の構築</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                アドバイザーとして一定期間関わってもらい、その後、コミットメントを強める契約に移行(役員としてリクルート)することで、より深い協力関係を築くことができます。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientAppeal;