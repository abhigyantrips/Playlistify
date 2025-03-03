'use server';

import { account } from '@/db/schema';
import { and, eq } from 'drizzle-orm';

import { headers } from 'next/headers';

import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

export async function getPlaylists() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userAccount = await db.query.account.findFirst({
    where: and(
      eq(account.userId, session!.user.id),
      eq(account.providerId, 'spotify')
    ),
  });
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${userAccount!.accessToken}`,
    },
  });
  return response.json();
}
