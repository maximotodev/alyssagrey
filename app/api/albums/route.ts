import { getAlbums } from "@/lib/spotify";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";


// Handles GET requests to /api/albums
export async function GET(request: Request) {
  unstable_noStore()
  const response = await getAlbums();
  const data = await response.json();
  
  return NextResponse.json( data , { status: 200 });
}