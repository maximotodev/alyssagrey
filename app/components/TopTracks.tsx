import Image from "next/image";
import Link from "next/link";

interface Track {
    external_urls: { spotify: string },
    name: string,
    popularity: number,
    preview_url: string,
    id: string,
    images: [{url: string}],
  }

  // {
  //   album_type: 'single',
  //   total_tracks: 1,
  //   available_markets: [
  //     'AR', 'AU', 'AT', 'BE', 'BO', 'BR', 'BG', 'CA', 'CL', 'CO',
  //     'CR', 'CY', 'CZ', 'DK', 'DO', 'DE', 'EC', 'EE', 'SV', 'FI',
  //     'FR', 'GR', 'GT', 'HN', 'HK', 'HU', 'IS', 'IE', 'IT', 'LV',
  //     'LT', 'LU', 'MY', 'MT', 'MX', 'NL', 'NZ', 'NI', 'NO', 'PA',
  //     'PY', 'PE', 'PH', 'PL', 'PT', 'SG', 'SK', 'ES', 'SE', 'CH',
  //     'TW', 'TR', 'UY', 'US', 'GB', 'AD', 'LI', 'MC', 'ID', 'JP',
  //     'TH', 'VN', 'RO', 'IL', 'ZA', 'SA', 'AE', 'BH', 'QA', 'OM',
  //     'KW', 'EG', 'MA', 'DZ', 'TN', 'LB', 'JO', 'PS', 'IN', 'BY',
  //     'KZ', 'MD', 'UA', 'AL', 'BA', 'HR', 'ME', 'MK', 'RS', 'SI',
  //     'KR', 'BD', 'PK', 'LK', 'GH', 'KE', 'NG', 'TZ', 'UG', 'AG',
  //     ... 85 more items
  //   ],
  //   external_urls: {
  //     spotify: 'https://open.spotify.com/album/34yqyd1Ow2np6EnVEoLpvw'
  //   },
  //   href: 'https://api.spotify.com/v1/albums/34yqyd1Ow2np6EnVEoLpvw',
  //   id: '34yqyd1Ow2np6EnVEoLpvw',
  //   images: [ [Object], [Object], [Object] ],
  //   name: 'All the Way',
  //   release_date: '2020-09-25',
  //   release_date_precision: 'day',
  //   type: 'album',
  //   uri: 'spotify:album:34yqyd1Ow2np6EnVEoLpvw',
  //   artists: [ [Object] ],
  //   album_group: 'appears_on'
  // }

const TopTracks = async () => {
    const res = await fetch('http://127.0.0.1:3000/api/albums')
    const { items }   = await res.json()
    // console.log(items)
    return <>
    top tracks
    <ul>
      {items.map((track: Track) => (
          <Link href={track.external_urls.spotify} key={track.id}>
            <li>{track.name}</li>
            <Image priority width={360} height={360} src={track.images[0].url} alt={track.name} />
          </Link>
      ))}
  </ul>
    </>
}

export default TopTracks