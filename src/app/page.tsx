import Image from 'next/image'
import HomeHeader from './components/HomeHeader'
import HomeSearch from './components/HomeSearch'

export default function Home() {
  return (
    <main className="">
      {/* Header  */}
      <HomeHeader />  

      {/* body    */}

      <div className="flex flex-col items-center mt-24">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" 
          width="300" 
          height="300"
          alt="image" 
        />

        <HomeSearch />
      </div>



      {/* footer  */}
    </main>
  )
}
