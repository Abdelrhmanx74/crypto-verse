"use client"
import { Loading } from '@/animations';
import { Divider } from '@/components/UI';
import { useGetCryptosNewsQuery } from '@/services/cryptoNewsApi';
import { Article } from '@/types/articleType';
import { Alert, Box, Card, SkeletonLoader, Stack } from '@twilio-paste/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const NewsArticles = ({ searchTerm }: { searchTerm?: string }) => {
    const { data: news, error, isFetching } = useGetCryptosNewsQuery({})

    const [newsData, setNewsData] = useState(news?.data || [])

    useEffect(() => {
        if (news?.data) {
            const filteredNews = searchTerm
                ? news.data.filter((article: Article) =>
                    article.title.toLowerCase().includes(searchTerm.toLowerCase()))
                : news.data;
            setNewsData(filteredNews);
        }
    }, [news?.data, searchTerm]);



    if (error) {
        return <Alert variant='error'>
            Something wrong happened fetching data
        </Alert>
    }

    return (
        <div className='w-full h-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
            {newsData?.map((article: Article) => (
                <Link key={article.url} href={`${article.url}`}>
                    <div className='border-[1px] flex flex-col gap-4 border-blue-200 transition-all shadow-md hover:shadow-lg hover:shadow-blue-200 p-4 rounded-2xl  w-full h-full'>
                        <div className='w-full h-full flex flex-col gap-4'>
                            {article.thumbnail ? <Image width={600} height={200} alt={article.title} src={article.thumbnail || "article thumbnail"} /> : null}
                            <h1 className='text-2xl text-black font-semibold'>{article.title}</h1>
                        </div>
                        <div className='w-full h-fit flex flex-col text-lg font-medium text-blue-300 gap-2'>
                            {article.description ? <p>{article.description}</p> : null}
                            <Divider />
                            <p className='text-sm'>Date: {article.createdAt}</p>
                        </div>
                    </div>
                </Link>))}
        </div>
    )
}

export default NewsArticles