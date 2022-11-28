import { mount } from "@vue/test-utils";
import SearchForm from "../components/SearchForm.vue";
import { test, expect, describe, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";

describe("Searchform component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("mount component and verify input value", async () => {
    expect(SearchForm).toBeTruthy();

    const wrapper = mount(SearchForm);

    const search = wrapper.find("input");
    search.setValue("girls");

    expect(search.element.value).toBe("girls");
  });
});
