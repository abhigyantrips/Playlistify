import { Avatar, Frame } from '@react95/core';

export default function PlaylistInfoPageSkeleton() {
  return (
    <div className="container mx-auto my-10">
      <Frame
        bgColor="$material"
        boxShadow="$out"
        className="flex flex-col space-y-8 p-8"
      >
        {/* Playlist Header Skeleton */}
        <div className="flex space-x-4">
          <div className="animate-pulse">
            <div className="h-48 w-48 border-4 border-gray-400 bg-gray-400"></div>
          </div>
          <div className="flex-1 animate-pulse space-y-4">
            <div className="h-10 w-3/4 bg-gray-400"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-400"></div>
              <div className="h-4 w-2/3 bg-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Responsive layout - default stacked, side-by-side on xl */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:space-x-4">
          {/* Tracks List Skeleton - full width by default, left side on xl */}
          <div className="order-2 mt-8 flex flex-col space-y-4 xl:order-1 xl:mt-0 xl:w-3/5">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex animate-pulse items-center space-x-4"
                >
                  <div className="h-16 w-16 border-2 border-gray-400 bg-gray-400"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-5 w-1/3 bg-gray-400"></div>
                    <div className="h-4 w-1/2 bg-gray-400"></div>
                  </div>
                </div>
              ))}
          </div>

          {/* Genres Chart Skeleton - grid by default, stacked column on right for xl */}
          <div className="order-1 grid grid-cols-2 gap-4 xl:order-2 xl:flex xl:flex-col">
            <Frame
              bgColor="$material"
              boxShadow="$out"
              className="flex flex-col items-center p-4 xl:p-6"
            >
              <div className="flex w-full animate-pulse flex-col items-start space-y-2">
                <h2 className="bg-gray-400 text-2xl font-bold text-transparent">
                  Playlist Genres
                </h2>
                <p className="bg-gray-400 text-lg text-transparent">
                  Includes all the genres fetched from playlist artists.
                </p>
              </div>
              <div className="animate-pulse opacity-50">
                <Avatar className="m-6 !h-48 !w-48 rounded-full border-4 border-gray-400 bg-gray-400" />
              </div>
            </Frame>
            <Frame
              bgColor="$material"
              boxShadow="$out"
              className="flex flex-col items-center p-4 xl:p-6"
            >
              <div className="flex w-full animate-pulse flex-col items-start space-y-2">
                <h2 className="bg-gray-400 text-2xl font-bold text-transparent">
                  Playlist Genres
                </h2>
                <p className="bg-gray-400 text-lg text-transparent">
                  Includes all the genres fetched from playlist artists.
                </p>
              </div>
              <div className="animate-pulse opacity-50">
                <Avatar className="m-6 !h-48 !w-48 rounded-full border-4 border-gray-400 bg-gray-400" />
              </div>
            </Frame>
          </div>
        </div>
      </Frame>
    </div>
  );
}
