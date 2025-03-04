import { getPlaylist, getPlaylistItems } from '@/lib/actions/playlists';

import PlaylistInfoPageClient from '@/app/(core)/playlists/[id]/page.client';

export default async function PlaylistInfoPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const playlist = await getPlaylist({ id });
  const tracks = await getPlaylistItems({ id });

  return <PlaylistInfoPageClient playlist={playlist} tracks={tracks} />;
}
