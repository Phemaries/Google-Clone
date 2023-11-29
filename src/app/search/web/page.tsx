import React from 'react'

const WebSearchPage = async ( {searchParams}: any ) => {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_API_KEY}&q=${searchParams.searchTerm}`)
  const res = await response.json()

  const results = res.items

  return (
    <>
      {results && results.map((result: any) => <h1>{result.title}</h1>)}
    </>
  )
}

export default WebSearchPage