import { getArtist, getTopTracks } from "@/lib/spotify";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";

interface Track {
  album: {
    album_type: string,
    external_urls: {
      spotify: string
    },
    href: string,
    images: [
      {
       url: string,
        height: number,
        width: number
      }
    ],
    is_playable: true,
    name: string,
    release_date: Date,
  },
  external_urls: { spotify: string },
  name: string,
  popularity: number,
  preview_url: string,
  id: string,
}

async function getTracks() {

    unstable_noStore()
    
    const res = await fetch(`http://127.0.0.1:3000/api/albums`);
   
    //   if (!res.ok) {
    //       // This will activate the closest `error.js` Error Boundary
    //       throw new Error('Failed to fetch data')
    //     }
    //   return res.json()
      // const res = await fetch(`http://127.0.0.1:3000/api`);
      // const res = await getTopTracks()
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
          }
        return res.json()
      }

export default async function Page() {
  
  const { tracks } = await getTracks()

  return (
      <section>
          <ul>
      {tracks.map((track: Track) => (
          <Link href={track.album.external_urls.spotify} key={track.id}>
            <li>{track.name}</li>
            <Image priority width={360} height={360} src={track.album.images[0].url} alt={track.name} />
          </Link>
      ))}
  </ul>
      </section>
  )
};
