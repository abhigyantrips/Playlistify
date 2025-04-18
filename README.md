# [Playlistify](https://playlistify.abhigyantrips.dev)

A website that analyzes your playlists, the genre distribution and mood, and recommends a few songs based on the data.

I'll be honest, I started this project _before_ I learned that the properties I was trying to use from the API had already been deprecated by Spotify (see endpoints for [audio features](https://developer.spotify.com/documentation/web-api/reference/get-audio-features), [audio analysis](https://developer.spotify.com/documentation/web-api/reference/get-audio-analysis), and [recommendations](https://developer.spotify.com/documentation/web-api/reference/get-recommendations)). Turns out, they don't want to allow other companies to train ML models off of the data they've collected.

Hence, this project is a half-assed attempt trying to make something that looks good with a retro feel. The pie charts are based on very basic properties, and the recommendations just omit 5 tracks from the list of tracks and show it under a "Your Recommendations" card. Yes, that's basically a scam lol.

The project still remains here as a "proof of concept", and I hope someone is able to get some takeaway from my ordeals. Peace.

![Example Screenshot](https://github.com/user-attachments/assets/99fc9576-acd1-48ab-b504-cc5364e95248)

## Technologies Used

This website has been built almost completely in TypeScript with the following frameworks.

1. [Next.JS](https://nextjs.org), hosted on [Vercel](https://vercel.com/home).
2. [TailwindCSS](https://tailwindcss.com), for styling.
3. [React95](https://react95.github.io/React95/?path=/story/all--all), a UI component library based on Windows95.
4. [Better Auth](https://www.better-auth.com/), for authenticating against Spotify (with middleware).
5. [Drizzle ORM](https://orm.drizzle.team/), for interacting with the database for requests.
6. [Spotify Web API TypeScript SDK](https://github.com/spotify/spotify-web-api-ts-sdk/), for interacting with the [Spotify Web API](https://developer.spotify.com/documentation/web-api).

## Video Demonstration

https://github.com/user-attachments/assets/7a69b135-3394-4e42-b03a-18571b6088e1

## Development

Install the dependencies using `pnpm`.

```console
pnpm install
```

Populate the environment variables (in `.env`) for Better Auth and the database provider (I used [Neon Postgres](https://neon.tech/)).

```env
# Authentication

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=

# Database

DATABASE_URL=
```

Generate and apply the database migrations using Drizzle.

```console
npx drizzle-kit generate # generate the migration file
npx drizzle-kit migrate # apply the migration
```

Run the development server using the following command.

```console
pnpm dev
```
