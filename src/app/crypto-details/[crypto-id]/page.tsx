"use client"
import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { usePathname } from 'next/navigation'
import { Alert, Box, Card, Stack } from '@twilio-paste/core'
import { Loading } from '@/animations'
import { Divider } from '@/components/UI'
import { DataBarChartIcon } from "@twilio-paste/icons/esm/DataBarChartIcon";
import { DataLineChartIcon } from "@twilio-paste/icons/esm/DataLineChartIcon";
import { NeutralIcon } from "@twilio-paste/icons/esm/NeutralIcon";
import { useGetCryptoDetailsQuery } from '@/services/cryptoApi'

const Page = () => {
    const CoinUuid = usePathname().split("/")[2];
    const { data, error, isFetching } = useGetCryptoDetailsQuery(CoinUuid);
    const [cryptoDetails, setCryptoDetails] = useState(data?.data?.coin || []);

    useEffect(() => {
        if (data?.data?.coin) {
            setCryptoDetails(data?.data?.coin);
        }
    }, [data?.data?.coin]);

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: "" },
        { title: 'Rank', value: cryptoDetails.rank, icon: '' },
        { title: '24h Volume', value: `$ ${cryptoDetails['24hVolume'] && millify(cryptoDetails['24hVolume'])}`, icon: "" },
        { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: "" },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh?.price)}`, icon: "" },
    ];

    const genericStats = [
        {
            title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <DataLineChartIcon decorative={true} />
        },
        {
            title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <DataBarChartIcon decorative={true} />
        },
        {
            title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed.toString(), icon: <NeutralIcon decorative={true} />
        },
        {
            title: 'Total Supply', value: `$ ${millify(cryptoDetails.supply?.total)}`, icon: <NeutralIcon decorative={true} />
        },
        {
            title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.supply?.circulating)}`, icon: <NeutralIcon decorative={true} />
        },
    ];

    if (error) {
        return <Alert variant='error'>
            Something wrong happened fetching data
        </Alert>
    } else if (isFetching) {
        return <Loading />
    }

    return (
        <div className='w-full h-full flex flex-col gap-6 items-center justify-center'>
            <p className='text-5xl font-bold text-blue-300'>
                {cryptoDetails.name} Price
            </p>
            <p className='text-lg font-medium text-blue-200'>{cryptoDetails?.name} live Price in US Dollars. View value statistics, market cap and</p>
            <div className='w-full h-full flex flex-col gap-4'>
                <Box className='flex gap-8'>
                    <Card>
                        <Box marginBottom="space80">
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-3xl font-bold text-blue-300'>{cryptoDetails?.name} Value Statistics</h1>
                                <p className='font-medium text-blue-200'>An overview showing the stats of all {cryptoDetails?.name}</p>
                            </div>
                        </Box>
                        <Divider />
                        <Stack orientation="vertical" spacing="space60">
                            {stats.map(({ icon, title, value }, index) => (
                                <div
                                    key={index}
                                    className='w-full h-full flex items-center justify-between gap-4'>
                                    <div className='flex items-center gap-2'>
                                        {/* <Image src={icon} alt={|| "status visual"} width={48} height={48} /> */}
                                        {icon}
                                        <p className='text-lg font-semibold text-blue-200 '>
                                            {title}
                                        </p>
                                    </div>
                                    <p className='font-bold text-xl text-blue-300'>
                                        {value}
                                    </p>
                                </div>
                            ))}
                            <Divider />
                        </Stack>
                    </Card>
                    <Card>
                        <Box marginBottom="space80">
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-3xl font-bold text-blue-300'>Other Statics</h1>
                                <p className='font-medium text-blue-200'>An overview showing the stats of all cryptocurrencies</p>
                            </div>
                        </Box>
                        <Divider />
                        <Stack orientation="vertical" spacing="space60">
                            {genericStats.map(({ icon, title, value }, index) => (
                                <div
                                    key={index}
                                    className='w-full h-full flex items-center justify-between gap-4'>
                                    <div className='flex items-center gap-2'>
                                        {/* <Image src={icon} alt={|| "status visual"} width={48} height={48} /> */}
                                        {icon}
                                        <p className='text-lg font-semibold text-blue-200 '>
                                            {title}
                                        </p>
                                    </div>
                                    <p className='font-bold text-xl text-blue-300'>
                                        {value}
                                    </p>
                                </div>
                            ))}
                            <Divider />
                        </Stack>
                    </Card>
                </Box>
            </div>
        </div >
    )
}

export default Page;