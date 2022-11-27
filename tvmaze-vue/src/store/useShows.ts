import { defineStore } from "pinia";
import type { IShow } from "../types";

interface State {
  shows: IShow[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
}

export const useShows = defineStore("shows", {
  state: (): State => ({
    shows: [],
    isLoading: true,
    hasError: false,
    errorMessage: null,
  }),
  actions: {
    async fetchShows() {
      this.isLoading = true;
      const url = "https://api.tvmaze.com/shows";

      const fetchReponse = await fetch(url);
      if (!fetchReponse.ok) {
        this.hasError = true;
        this.errorMessage = fetchReponse.statusText;
        return;
      }
      const jsonResponse = await fetchReponse.json();
      this.isLoading = false;
      this.shows = jsonResponse as IShow[];
    },
  },
});
