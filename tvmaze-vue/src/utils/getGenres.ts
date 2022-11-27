import type { IShow } from "../types";

export function getGenres(shows: IShow[]) {
  if (shows.length > 0) {
    const genres = shows.map((show) => show.genres).flat();
    return [...new Set(genres)];
  }
  return [];
}
