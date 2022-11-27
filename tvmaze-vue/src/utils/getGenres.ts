import type { IShow } from "../types";

/* This method returns a shuffled list of genres present in the shows list */

export function getGenres(shows: IShow[]): string[] {
  if (shows.length > 0) {
    const genres = shows
      .map((show) => show.genres)
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .flat();
    return [...new Set(genres)];
  }
  return [];
}
