import { getTopShows } from "./getTopShows";
import { test, expect, describe } from "vitest";
import shows from "../mocks/shows";

describe("Test getTopShows util function", () => {
  test("Pass shows array and verify top shows", () => {
    const topShows = getTopShows(shows);

    // There's only one top show (whose rating is more than 8.5) in the input
    expect(topShows.length).toBe(1);
  });
});
