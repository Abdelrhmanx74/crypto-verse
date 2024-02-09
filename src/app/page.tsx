"use client"
import { GlobalStats, CryptoCurrencies, TitleLink, NewsArticles } from "@/components"
import Link from "next/link";

export default function app() {


  return (
    <div className='w-full h-full flex flex-col gap-10'>
      <div className="w-full h-full">
        <GlobalStats />
      </div>
      <div className="w-full h-full flex flex-col gap-8 p-8">
        <TitleLink href="/cryptocurrencies" linkLabel="Show More" title="Top 10 Cryptocurrencies" />
        <CryptoCurrencies simplified />
      </div>
      <div className="w-full h-full flex flex-col gap-8 p-8">
        <TitleLink href="/news" linkLabel="Show More" title="Top Cryptocurrencies News" />
        <NewsArticles />
      </div>
    </div>
  );
}
