import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ClientAppeal = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">クライアント(企業)向けアピールポイント</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ヒトシゴトのサービスの特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>月額10万円からご利用可能（税別）※ご利用内容などにより変動あり</li>
              <li>人脈、経験、ノウハウを持った人材を安価で活用することが出来ます。</li>
              <li>このクラスの人材を社員や役員として採用するとなると高額な報酬(年収は最低1500万以上)が必要。</li>
              <li>しかしそのクラスの人材に求めるものは単なるワーカーとしての労働力ではなくその人が持つ知恵やノウハウや人脈になります。</li>
              <li>であれば非常勤として定期的なオンラインミーティングで知恵や人脈を吸収することが可能。それをローコストで活用できる。</li>
              <li>同時に5～10人のアドバイザーを入れ替えながら活用してる企業もあります。</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="mb-4">
              複数のアドバイザーを同時に活用することで、広範な視点や専門的な知識を多角的に得ることができ、シナジー効果が期待できます。
            </p>
            <p>
              さらに、アドバイザーとして一定期間関わってもらい、その後、コミットメントを強める契約に移行(役員としてリクルート)することで、より深い協力関係を築くことができます。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientAppeal;