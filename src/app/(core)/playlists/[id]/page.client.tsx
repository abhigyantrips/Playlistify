'use client';

import { Avatar, Frame } from '@react95/core';
import {
  Page,
  PlaylistedTrack,
  SimplifiedPlaylist,
  Track,
} from '@spotify/web-api-ts-sdk';
import {
  Cell,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PlaylistInfoPageClient({
  playlist,
  tracks,
  genres,
}: {
  playlist: SimplifiedPlaylist;
  tracks: Page<PlaylistedTrack<Track>>;
  genres: { genre: string; count: number }[];
}) {
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
        <div className="flex space-x-4">
          <Frame
            bgColor="$material"
            boxShadow="$out"
            className="flex flex-col items-center p-8"
          >
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold">Playlist Genres</h2>
              <p className="text-lg text-gray-500">
                Includes all the genres fetched from playlist artists.
              </p>
            </div>
            <PieChart width={300} height={300}>
              <Pie
                data={genres}
                dataKey="count"
                nameKey="genre"
                cx="50%"
                cy="50%"
                outerRadius={120}
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
        </div>
        <div className="flex flex-col space-y-4">
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
