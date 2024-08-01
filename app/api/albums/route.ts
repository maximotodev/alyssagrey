import { getAlbums, getTopTracks } from "@/lib/spotify";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'


export const dynamic = 'force-dynamic' // defaults to auto
// Handles GET requests to /api/albums
export async function GET(request: Request) {

  unstable_noStore()
 
  const response = await getTopTracks();
  const data = await response.json();
  
  return Response.json( data , { 
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}