import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cases = () => {
  const cases = [
    { title: "事例1", content: "事例1の詳細内容..." },
    { title: "事例2", content: "事例2の詳細内容..." },
    { title: "事例3", content: "事例3の詳細内容..." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">事例一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((case_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{case_.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{case_.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cases;