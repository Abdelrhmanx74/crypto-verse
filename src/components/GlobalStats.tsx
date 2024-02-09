"use client"
import React from 'react'
import millify from "millify"
import { useGetCryptosQuery } from "@/services/cryptoApi";
import { Loading } from '@/animations';
import Error from 'next/error';
import { Alert, AlertDialog } from '@twilio-paste/core';

const GlobalStats = () => {
    const { data, error, isFetching = true } = useGetCryptosQuery(5);

    const globalStats = data?.data?.stats;

    if (error) {
        return <Alert variant='error'>
            Something wrong happened fetching data
        </Alert>
    } else if (isFetching) {
        return <Loading />
    }

    return (
        <div className="w-full h-full flex flex-col gap-8">
            <h1 className="text-3xl font-bold text-black">Global Crypto Stats</h1>
            <div className="w-full h-full grid grid-cols-2 gap-4">
                <div className="w-fit h-full flex flex-col gap-2">
                    <h3 className="text-blue-300  font-medium">Total Cryptocurriencies</h3>
                    <p className="text-3xl font-semibold">{millify(globalStats?.total)}</p>
                </div>
                <div className="w-fit h-full flex flex-col gap-2">
                    <h3 className="text-blue-300  font-medium">Total Exchanges</h3>
                    <p className="text-3xl font-semibold">{millify(globalStats?.totalExchanges)}</p>
                </div>
                <div className="w-fit h-full flex flex-col gap-2">
                    <h3 className="text-blue-300  font-medium">Total Market Cap</h3>
                    <p className="text-3xl font-semibold">{millify(globalStats?.totalMarketCap)}</p>
                </div>
                <div className="w-fit h-full flex flex-col gap-2">
                    <h3 className="text-blue-300  font-medium">Total 24h Volume</h3>
                    <p className="text-3xl font-semibold">{millify(globalStats?.total24hVolume)}</p>
                </div>
                <div className="w-fit h-full flex flex-col gap-2">
                    <h3 className="text-blue-300  font-medium">Total Markets</h3>
                    <p className="text-3xl font-semibold">{millify(globalStats?.totalMarkets)}</p>
                </div>
            </div>
        </div>

    )
}

export default GlobalStats