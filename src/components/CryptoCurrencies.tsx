"use client"

import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '@/services/cryptoApi';
import { Alert, Avatar, Card } from '@twilio-paste/core';
import millify from 'millify';
import Link from 'next/link'
import { Currency } from '@/types/currencyType';
import { Divider } from './UI';
import { Loading } from '@/animations';

const CryptoCurrencies = ({ simplified, searchTerm }: { simplified?: boolean, searchTerm?: string }) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, error, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState<Currency[]>(cryptosList?.data?.coins || []);

    useEffect(() => {
        if (cryptosList?.data?.coins) {
            const filteredCryptos = searchTerm
                ? cryptosList.data.coins.filter((crypto: Currency) =>
                    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()))
                : cryptosList.data.coins;

            setCryptos(filteredCryptos);
        }
    }, [cryptosList, searchTerm]);

    if (error) {
        return <Alert variant='error'>
            Something wrong happened fetching data
        </Alert>
    } else if (isFetching) {
        return <Loading />
    }

    return (
        <div className='w-full h-full '>
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
                {cryptos?.map((currency: Currency) => (
                    <Link key={currency.uuid} href={`/crypto-details/${currency.uuid}`}>
                        <div className='border-[1px] flex flex-col gap-4 border-blue-200 transition-all shadow-md hover:shadow-lg hover:shadow-blue-200 p-4 rounded-2xl  w-full h-full'>
                            <div className='w-full h-fit flex items-center justify-between gap-4'>
                                <h1 className='text-2xl text-black font-semibold'>{`${currency.rank}- ${currency.name}`}</h1>
                                <Avatar size={'sizeIcon110'} name={currency.name} src={currency.iconUrl} />
                            </div>
                            <Divider />
                            <div className='w-full h-fit flex flex-col text-lg font-medium text-blue-300 gap-2'>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CryptoCurrencies