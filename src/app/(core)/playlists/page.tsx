import { Frame } from '@react95/core';

import { Metadata } from 'next';

import { getPlaylists } from '@/lib/actions/playlists';

export const metadata: Metadata = {
  title: 'Playlists',
};

export default async function PlaylistsPage() {
  const playlists = await getPlaylists();
  return (
    <div className="container m-10 mx-auto">
      <Frame bgColor="$material" boxShadow="$out">
        <pre>{JSON.stringify(playlists, null, 2)}</pre>
      </Frame>
    </div>
  );
}
