'use client';

import { Avatar, Frame } from '@react95/core';
import {
  Page,
  PlaylistedTrack,
  SimplifiedPlaylist,
  Track,
} from '@spotify/web-api-ts-sdk';
import { Cell, Pie, Tooltip } from 'recharts';

import dynamic from 'next/dynamic';

const PieChart = dynamic(
  () => import('recharts').then((recharts) => recharts.PieChart),
  {
    ssr: false,
  }
);

const COLORS = [
  '#179085',
  '#306437',
  '#4F7B58',
  '#F2B53B',
  '#EF7E39',
  '#BD3241',
];

export default function PlaylistInfoPageClient({
  playlist,
  tracks,
  genres,
}: {
  playlist: SimplifiedPlaylist;
  tracks: Page<PlaylistedTrack<Track>>;
  genres: { genre: string; count: number }[];
}) {
  // Separate the main tracks from recommendations (last 5)
  const mainTracks = tracks.items.slice(0, -5);
  const recommendedTracks = tracks.items.slice(-5);

  // Create popularity data for the second chart
  const popularityData = tracks.items.slice(0, 10).map((item) => ({
    name: item.track.name,
    value: item.track.popularity,
  }));

  return (
    <div className="container mx-auto my-10">
      <Frame
        bgColor="$material"
        boxShadow="$out"
        className="flex flex-col space-y-8 p-8"
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

        {/* Responsive layout - default stacked, side-by-side on xl */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:space-x-4">
          {/* Tracks list - full width by default, left side on xl */}
          <div className="order-2 mt-8 flex flex-col space-y-4 xl:order-1 xl:mt-0 xl:w-3/5">
            {mainTracks.map((item, index) => {
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
                      {item.track.artists
                        .map((artist) => artist.name)
                        .join(', ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts and recommendations - right side */}
          <div className="order-1 flex flex-col gap-4 xl:order-2">
            {/* Charts section - grid on mobile, column on desktop */}
            <div className="grid grid-cols-2 gap-4 xl:flex xl:flex-col">
              <Frame
                bgColor="$material"
                boxShadow="$out"
                className="flex min-h-[350px] flex-col items-center p-4 xl:min-h-[370px] xl:p-6"
              >
                <div className="flex w-full flex-col space-y-2">
                  <h2 className="text-2xl font-bold">Playlist Genres</h2>
                  <p className="text-lg text-gray-500">
                    Includes all the genres fetched from playlist artists.
                  </p>
                </div>
                <PieChart width={300} height={250}>
                  <Pie
                    data={genres}
                    dataKey="count"
                    nameKey="genre"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {genres.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    labelClassName="font-bold"
                    wrapperClassName="px-2 py-1 rounded-md"
                  />
                </PieChart>
              </Frame>
              <Frame
                bgColor="$material"
                boxShadow="$out"
                className="flex min-h-[350px] flex-col items-center p-4 xl:min-h-[370px] xl:p-6"
              >
                <div className="flex w-full flex-col space-y-2">
                  <h2 className="text-2xl font-bold">Track Popularity</h2>
                  <p className="text-lg text-gray-500">
                    Shows popularity ratings of the top tracks in this playlist.
                  </p>
                </div>
                <PieChart width={300} height={250}>
                  <Pie
                    data={popularityData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {popularityData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    labelClassName="font-bold"
                    wrapperClassName="px-2 py-1 rounded-md"
                  />
                </PieChart>
              </Frame>
            </div>

            {/* Recommendations section */}
            <Frame
              bgColor="$material"
              boxShadow="$out"
              className="flex flex-col p-4 xl:p-6"
            >
              <h2 className="mb-4 text-2xl font-bold">Your Recommendations</h2>
              <div className="flex flex-col space-y-4">
                {recommendedTracks.map((item, index) => (
                  <div
                    key={`rec-${item.track.id}:${index}`}
                    className="flex items-center space-x-4"
                  >
                    <Avatar
                      src={item.track.album.images[0]?.url}
                      alt={item.track.name}
                      className="!h-12 !w-12 border-2 border-gray-400"
                    />
                    <div className="space-y-1">
                      <h3 className="text-base font-bold">{item.track.name}</h3>
                      <p className="text-xs text-gray-500">
                        {item.track.artists
                          .map((artist) => artist.name)
                          .join(', ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Frame>
          </div>
        </div>
      </Frame>
    </div>
  );
}
