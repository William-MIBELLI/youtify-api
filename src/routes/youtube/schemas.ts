import { Static, Type } from "@sinclair/typebox";

export const SpotifyPlaylistSchema = {
  body: Type.Object({
    playlist: Type.Array(Type.String()),
  }),
};

export type SpotifyPlaylistBody = Static<typeof SpotifyPlaylistSchema.body>;
