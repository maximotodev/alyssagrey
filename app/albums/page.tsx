import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import { Url } from "url";

interface Item {
  id: Key | null | undefined,
  images: {
    url: string
  }[],
  name: string,
  external_urls: {
    spotify: Url
  }
  release_date: string,
}

const redirect_uri = process.env.REDIRECT_URI

async function getAlbums() {

    const res = await fetch(`${redirect_uri}/api/albums`);
   
      if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
        }
      return res.json()
    }

export default async function Page() {
  const data = await getAlbums()
  let albums: Item[] = data.items
  const slicedArray = albums.slice(0,8)
  return (
      
      <section>
          <ul>
      {slicedArray.map((album) => (
          <Link href={album.external_urls.spotify} key={album.id}>
            <li>{album.name}</li>
            <Image priority width={360} height={360} src={album.images[1].url} alt={album.name} />
          </Link>
      ))}
  </ul>
      </section>
  )
};
