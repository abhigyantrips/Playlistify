'use server';

import { spotify } from '@/lib/spotify';

export async function getArtistGenres(artistIds: string[]) {
  const sdk = await spotify();
  const artists = await sdk.artists.get(artistIds);
  const genreMap: Record<string, number> = {};

  artists.forEach((artist) => {
    artist.genres.forEach((genre) => {
      genreMap[genre] = (genreMap[genre] || 0) + 1;
    });
  });

  return Object.entries(genreMap).map(([genre, count]) => ({ genre, count }));
}
