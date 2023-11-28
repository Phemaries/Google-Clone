"use client";

import { useEffect, useState } from 'react'

const CountryLookup = () => {

    const [country, setCountry] = useState("United States")

    useEffect(() => {
        const ipSearch = async () => {
            const response = await fetch (`https://api.ipdata.co/?api-key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            const res = await response.json()
            const co_name = res.country_name
            setCountry(co_name)           
        }

        ipSearch()
        // catch error
            .catch(console.error)
        
    }, [])


    return (

        <div>
            {country}           
        </div>
  )
}

export default CountryLookup