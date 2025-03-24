import { Metadata } from 'next';

import { getUserPlaylists } from '@/lib/actions/playlists';
import { getUserProfile } from '@/lib/actions/users';

import PlaylistsPageClient from '@/app/(core)/playlists/page.client';

export const metadata: Metadata = {
  title: 'Playlists',
};

export default async function PlaylistsPage() {
  const playlists = await getUserPlaylists();
  const profile = await getUserProfile();

  return <PlaylistsPageClient playlists={playlists} profile={profile} />;
}
