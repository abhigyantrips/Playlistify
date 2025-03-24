import { Avatar, Button, Frame } from '@react95/core';

export default function PlaylistsPageSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Frame
        bgColor="$material"
        boxShadow="$out"
        className="max-w-screen-lg p-4 md:h-[calc(100vh-theme(spacing.24))] xl:h-[calc(100vh-theme(spacing.64))]"
      >
        <div className="flex h-full w-full">
          {/* Profile section skeleton */}
          <div className="mx-12 flex w-1/3 flex-col items-center justify-center space-y-4 xl:mx-24">
            <div className="animate-pulse">
              <Avatar className="!h-48 !w-48 overflow-hidden rounded-full border-4 border-gray-400 bg-gray-400" />
            </div>
            <div className="w-full animate-pulse">
              <div className="mx-auto h-8 w-64 bg-gray-400"></div>
            </div>
            <div className="w-full animate-pulse">
              <div className="mx-auto h-5 w-3/4 bg-gray-400"></div>
            </div>
          </div>

          {/* Playlists section skeleton */}
          <div className="w-2/3 overflow-auto p-4">
            <div className="animate-pulse space-y-2">
              <h1 className="w-fit bg-gray-400 text-2xl font-bold text-transparent">
                Your Playlists
              </h1>
              <p className="bg-gray-400 text-lg text-transparent">
                Choose a playlist to analyze and generate recommendations.
              </p>
            </div>

            <div className="mt-8 flex w-[30rem] flex-col space-y-4 overflow-auto">
              {Array(12)
                .fill(0)
                .map((_, index) => (
                  <Button
                    key={index}
                    className="flex animate-pulse items-center space-x-4 !p-2"
                  >
                    <Avatar className="aspect-square !h-16 !w-16 border-3 border-gray-400 bg-gray-500" />
                    <div className="space-y-1">
                      {/* Vary playlist name widths to look more natural */}
                      <div
                        className={`h-5 ${index % 2 === 0 ? 'w-64' : 'w-72'} bg-gray-400`}
                      ></div>
                      <div className="h-4 w-24 bg-gray-400"></div>
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
