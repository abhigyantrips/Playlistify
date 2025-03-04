import { account } from '@/db/schema';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { and, eq } from 'drizzle-orm';

import { headers } from 'next/headers';

import { runtimeEnv } from '@/config/env';

import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

export async function spotify() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    throw new Error('Invalid session');
  }

  const userAccount = await db.query.account.findFirst({
    where: and(
      eq(account.userId, session!.user.id),
      eq(account.providerId, 'spotify')
    ),
  });

  if (!userAccount) {
    throw new Error('Missing user account data');
  }

  const sdk = SpotifyApi.withAccessToken(runtimeEnv.SPOTIFY_CLIENT_ID, {
    access_token: userAccount.accessToken!,
    token_type: 'Bearer',
    expires_in: userAccount.accessTokenExpiresAt!.getTime() - Date.now(),
    refresh_token: userAccount.refreshToken!,
  });

  return sdk;
}
