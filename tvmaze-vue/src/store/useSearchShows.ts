import { defineStore } from "pinia";
import type { ISearch } from "../types";

interface State {
  searchResults: ISearch[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
}

export const useSearchShows = defineStore("search", {
  state: (): State => ({
    searchResults: [],
    isLoading: true,
    hasError: false,
    errorMessage: null,
  }),
  actions: {
    async searchShows(query: string) {
      this.isLoading = true;
      const url = `https://api.tvmaze.com/search/shows?q=${query}`;

      const searchResponse = await fetch(url);
      if (!searchResponse.ok) {
        this.hasError = true;
        this.errorMessage = searchResponse.statusText;
        return;
      }
      const jsonResponse = await searchResponse.json();
      this.isLoading = false;
      this.searchResults = jsonResponse as ISearch[];
    },
    resetSearchResults() {
      this.isLoading = false;
      this.searchResults = [];
    },
  },
});
