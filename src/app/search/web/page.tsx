import React from 'react'
import Link from 'next/link'
import WebSearchResults from '@/app/components/WebSearchResults'

const WebSearchPage = async ( {searchParams}: any ) => {

  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_API_KEY}&q=${searchParams.searchTerm}`)
  const res = await response.json()

  if(!response.ok) {
    throw new Error("Something went wrong!")
  }
  const results = res.items
  // console.log(results)

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      {results && <WebSearchResults results={res} />}
    </>
  )
}

export default WebSearchPage