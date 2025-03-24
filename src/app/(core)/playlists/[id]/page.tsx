import { getArtistGenres } from '@/lib/actions/artists';
import { getPlaylist, getPlaylistItems } from '@/lib/actions/playlists';

import PlaylistInfoPageClient from '@/app/(core)/playlists/[id]/page.client';

export default async function PlaylistInfoPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const playlist = await getPlaylist({ id });
  const tracks = await getPlaylistItems({ id });

  const artistIds = [
    ...new Set(tracks.items.flatMap((t) => t.track.artists.map((a) => a.id))),
  ];
  const genres = await getArtistGenres(artistIds);

  return (
    <PlaylistInfoPageClient
      playlist={playlist}
      tracks={tracks}
      genres={genres}
    />
  );
}
