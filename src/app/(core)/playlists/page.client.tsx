'use client';

import { Avatar, Button, Frame } from '@react95/core';
import { Page, SimplifiedPlaylist } from '@spotify/web-api-ts-sdk';

export default function PlaylistsPageClient({
  playlists,
}: {
  playlists: Page<SimplifiedPlaylist>;
}) {
  return (
    <div className="container m-10 mx-auto">
      <Frame bgColor="$material" boxShadow="$out" className="p-8">
        <div className="space-y-2 px-2">
          <h1 className="text-2xl font-bold">Your Playlists</h1>
          <p className="text-lg">
            Choose a playlist to analyze and generate recommendations.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {playlists.items.map((playlist) => (
            <Button
              key={playlist.id}
              bgColor="$material"
              boxShadow="$out"
              className="flex items-center space-x-4 !p-2 !text-left"
            >
              <Avatar
                className="!h-16 !w-16 border-3 border-gray-400"
                src={playlist.images[0]?.url}
                alt={playlist.name}
              />
              <div className="space-y-1">
                <h2 className="text-lg font-bold">{playlist.name}</h2>
                <p className="text-sm text-gray-500">
                  {playlist.tracks?.total || 0} tracks
                </p>
              </div>
            </Button>
          ))}
        </div>
      </Frame>
    </div>
  );
}
