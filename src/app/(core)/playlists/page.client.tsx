'use client';

import { Avatar, Button, Frame } from '@react95/core';
import { Page, SimplifiedPlaylist, UserProfile } from '@spotify/web-api-ts-sdk';

import { useRouter } from 'next/navigation';

export default function PlaylistsPageClient({
  playlists,
  profile,
}: {
  playlists: Page<SimplifiedPlaylist>;
  profile: UserProfile;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Frame
        bgColor="$material"
        boxShadow="$out"
        className="max-w-screen-lg p-4 md:h-[calc(100vh-theme(spacing.24))] xl:h-[calc(100vh-theme(spacing.64))]"
      >
        <div className="flex h-full w-full">
          <div className="mx-12 flex w-1/3 flex-col items-center justify-center space-y-4 xl:mx-24">
            <Avatar
              className="!h-48 !w-48 overflow-hidden rounded-full border-4 border-gray-400"
              src={profile.images[0]?.url}
              alt={profile.display_name}
            />
            <h1 className="text-4xl font-bold">{profile.display_name}</h1>
            <p className="text-lg text-gray-500">
              {profile.email || 'No email provided.'}
            </p>
          </div>
          <div className="w-2/3 overflow-auto p-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Your Playlists</h1>
              <p className="text-lg">
                Choose a playlist to analyze and generate recommendations.
              </p>
            </div>
            <div className="mt-8 flex flex-col space-y-4 overflow-auto">
              {playlists.items.map((playlist) => (
                <Button
                  key={playlist.id}
                  className="flex items-center space-x-4 !p-2 !text-left"
                  onClick={() => router.push(`/playlists/${playlist.id}`)}
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
          </div>
        </div>
      </Frame>
    </div>
  );
}
