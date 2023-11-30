import Link from "next/link"
import Image from "next/image"
import PaginationButtons from "./PaginationButtons"

const ImageSearchResults = ({results}: any) => {
    // console.log(results.items)
  return (
    <div className="sm:pb-24 pb-40  mt-4">      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
            {results.items?.map((result: any) => (
                <div key={result.title} className="mb-8">                 
                    <div className="group">
                        <Link href={result.image.contextLink}>
                            <img 
                                src={result.link} 
                                alt={result.title} 
                                width={150}
                                height={150}
                                className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow" 
                            />
                        </Link>
                        <Link href={result.image.contextLink}>
                            <h2 className="group-hover:underline truncate text-xl">
                            {result.title}
                            </h2>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <p className="group-hover:underline text-gray-600">
                            {result.displayLink}
                            </p>
                        </Link>
                    </div>                 
                </div>
            ))}
        </div>
        <div className="">
            <PaginationButtons />
        </div>     
    </div>
  )
}

export default ImageSearchResults