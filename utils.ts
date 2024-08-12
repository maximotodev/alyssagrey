import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from 'react'
import { getAccessToken } from './lib/spotify'
 
export async function getData() {

  const data = await getAccessToken()
  
  experimental_taintObjectReference(
    'Do not pass the whole user object to the client',
    data
  )
  experimental_taintUniqueValue(
    "Do not pass the user's address to the client",
    data,
    data.access_token
  )
  return data
}