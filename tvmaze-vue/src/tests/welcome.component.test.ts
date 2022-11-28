import { mount } from "@vue/test-utils";
import Welcome from "../components/Welcome.vue";
import { test, expect } from "vitest";

test("Mount Welcome component", async () => {
  expect(Welcome).toBeTruthy();

  const wrapper = mount(Welcome);

  expect(wrapper.get("h1").text()).toBe(
    "Find your perfect show for the evening"
  );
});
