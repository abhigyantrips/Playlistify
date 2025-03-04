import { Metadata } from 'next';

import { getUserPlaylists } from '@/lib/actions/playlists';

import PlaylistsPageClient from '@/app/(core)/playlists/page.client';

export const metadata: Metadata = {
  title: 'Playlists',
};

export default async function PlaylistsPage() {
  const playlists = await getUserPlaylists();

  return <PlaylistsPageClient playlists={playlists} />;
}
