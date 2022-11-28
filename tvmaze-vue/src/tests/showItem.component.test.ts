import { mount } from "@vue/test-utils";
import ShowItemComponent from "../components/ShowItem.vue";
import { test, expect, describe, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import showItem from "../mocks/showItem";

describe("Show Details component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("mount component and verify image src", async () => {
    expect(ShowItemComponent).toBeTruthy();

    const wrapper = mount(ShowItemComponent as any, {
      props: showItem,
    });

    const image = wrapper.find("img");

    expect(image.attributes("src")).toBe(
      "https://static.tvmaze.com/uploads/images/original_untouched/178/445621.jpg"
    );
  });
});
