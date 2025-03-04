import { Avatar, Frame } from '@react95/core';
import {
  Page,
  PlaylistedTrack,
  SimplifiedPlaylist,
  Track,
} from '@spotify/web-api-ts-sdk';

export default function PlaylistInfoPageClient({
  playlist,
  tracks,
}: {
  playlist: SimplifiedPlaylist;
  tracks: Page<PlaylistedTrack<Track>>;
}) {
  return (
    <div className="container mx-auto my-10">
      <Frame
        bgColor="$material"
        boxShadow="$out"
        className="flex-col space-y-8 p-8"
      >
        <div className="flex space-x-4">
          <Avatar
            className="!h-48 !w-48 border-4 border-gray-400"
            src={playlist.images[0]?.url}
            alt={playlist.name}
          />
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">{playlist.name}</h2>
            <div>
              <p className="text-lg text-gray-500">
                {playlist.description || 'No description provided.'}
                {' • '}
                {playlist.tracks?.total || 0} tracks, {playlist.followers.total}{' '}
                followers.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col space-y-4">
          {tracks.items.map((item, index) => {
            return (
              <div
                key={`${item.track.id}:${index}`}
                className="flex items-center space-x-4"
              >
                <Avatar
                  src={item.track.album.images[0]?.url}
                  alt={item.track.name}
                  className="!h-16 !w-16 border-2 border-gray-400"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">{item.track.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.track.artists.map((artist) => artist.name).join(', ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Frame>
    </div>
  );
}
