window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
import { mount } from "@vue/test-utils";
import Carousel from "../components/Carorsel.vue";
import { test, expect, describe } from "vitest";
import shows from "../mocks/shows";

describe("Carousel component", () => {
  test("mount component", async () => {
    expect(Carousel).toBeTruthy();

    mount(Carousel, {
      props: {
        shows,
      },
    });
  });
});
