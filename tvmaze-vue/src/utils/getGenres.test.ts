import { getGenres } from "./getGenres";
import { test, expect, describe } from "vitest";
import shows from "../mocks/shows";

describe("Test getgenres util function", () => {
  test("Pass shows array and verify genres length", () => {
    const genres = getGenres(shows);

    expect(genres.length).toBe(9);
  });
});
