import type { IShow } from "../types";

export function getGenres(shows: IShow[]) {
  if (typeof shows === "object") {
    return shows.map((show) => show.genres);
  }
  return [];
}
