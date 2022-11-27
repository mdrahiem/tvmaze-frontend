import type { IShow } from "../types";

/* This method returns a list of top 10 shows based on rating */

const TOP_AVERGAGE_RATING = 8.5;
const NUMBER_OF_TOP_SHOWS = 10;

export function getTopShows(shows: IShow[]): IShow[] {
  if (shows.length > 0) {
    return shows
      .filter((show) => {
        if (show.rating?.average) {
          return show.rating?.average > TOP_AVERGAGE_RATING;
        }
        return false;
      })
      .sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0))
      .splice(0, NUMBER_OF_TOP_SHOWS);
  }
  return [];
}
