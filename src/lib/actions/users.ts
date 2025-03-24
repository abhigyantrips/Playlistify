'use server';

import { spotify } from '@/lib/spotify';

export async function getUserProfile() {
  const sdk = await spotify();
  const profile = await sdk.currentUser.profile();

  return profile;
}
