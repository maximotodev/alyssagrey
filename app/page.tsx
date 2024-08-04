import { getArtist } from "@/lib/spotify";
import { unstable_noStore } from "next/cache";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Artist {
  name: string,
  id: string,
  images: {
    url: string  | StaticImport,
    height: number,
    width: number
  }[],
  genres: string[],
  followers: {total: number}
}

async function getHero() {

  const res = await fetch(`http://127.0.0.1:3000/api`);
  // const res = await getArtist()
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
  }

export default async function Home() {

  const data: Artist = await getHero()
  // console.log(data)
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
        <h1>{data.name}</h1>
       <Image priority width={data.images[0].width} height={data.images[0].height} src={data.images[0].url} alt={data.name} />
        <p>{data.followers.total}</p>
      </main>
  );
}
