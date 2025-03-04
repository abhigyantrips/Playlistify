'use server';

import { spotify } from '@/lib/spotify';

export async function getUserPlaylists() {
  const sdk = await spotify();
  const playlists = await sdk.currentUser.playlists.playlists();

  return playlists;
}

export async function getPlaylist({ id }: { id: string }) {
  const sdk = await spotify();
  const playlist = await sdk.playlists.getPlaylist(id);

  return playlist;
}
