'use client';

import { Button } from '@react95/core';
import { MediaCd } from '@react95/icons';

import { authClient } from '@/lib/client';

export default function LoginPageClient() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button
        className="flex items-center gap-2 !p-4"
        onClick={async () => {
          await authClient.signIn.social({
            provider: 'spotify',
          });
        }}
      >
        <MediaCd variant="32x32_4" />
        <span className="text-md font-bold">Login With Spotify</span>
      </Button>
    </div>
  );
}
