import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Jobs = () => {
  const jobs = [
    { title: "営業マネージャー", company: "株式会社A", location: "東京都", salary: "年収600万円〜" },
    { title: "ソフトウェアエンジニア", company: "B株式会社", location: "大阪府", salary: "年収500万円〜" },
    { title: "マーケティングスペシャリスト", company: "C株式会社", location: "福岡県", salary: "年収450万円〜" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">求人情報</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>会社名:</strong> {job.company}</p>
              <p><strong>勤務地:</strong> {job.location}</p>
              <p><strong>給与:</strong> {job.salary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;