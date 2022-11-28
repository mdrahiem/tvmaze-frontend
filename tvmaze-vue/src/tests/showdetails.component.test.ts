import { mount } from "@vue/test-utils";
import ShowDetails from "../components/ShowDetails.vue";
import { test, expect, describe, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import showDetails from "../mocks/show";

describe("Show Details component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("mount component and verify image src", async () => {
    expect(ShowDetails).toBeTruthy();

    const wrapper = mount(ShowDetails, {
      props: {
        showDetails,
      },
    });

    const image = wrapper.find("img");

    expect(image.attributes("src")).toBe(
      "https://static.tvmaze.com/uploads/images/original_untouched/298/745731.jpg"
    );
  });
});
