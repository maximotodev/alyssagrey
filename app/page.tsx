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

const redirect_uri = process.env.REDIRECT_URI

async function getHero() {

  const res = await fetch(`${redirect_uri}/api`);
  // let data: Artist = await res.json()
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
  }

export default async function Home() {
  const data: Artist = await getHero()
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{data.name}</h1>
       <Image priority width={data.images[0].width} height={data.images[0].height} src={data.images[0].url} alt={data.name} />
        <p>{data.followers.total}</p>
      </main>
  );
}
