import { defineStore } from "pinia";
import type { IShow, IEpisode } from "../types";

interface State {
  showDetails: IShow[];
  episodes: IEpisode[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
}

export const useShowDetails = defineStore("showDetails", {
  state: (): State => ({
    showDetails: [],
    episodes: [],
    isLoading: true,
    hasError: false,
    errorMessage: null,
  }),
  actions: {
    async fetchShowDetails(showId: string) {
      this.isLoading = true;
      const url = `https://api.tvmaze.com/shows/${showId}`;

      const detailsResponse = await fetch(url);
      if (!detailsResponse.ok) {
        this.hasError = true;
        this.errorMessage = detailsResponse.statusText;
        return;
      }
      const jsonResponse = await detailsResponse.json();
      this.isLoading = false;
      this.showDetails = jsonResponse as IShow[];
    },
    async fetchEpisodesList(showId: string) {
      this.isLoading = true;
      const url = `https://api.tvmaze.com/shows/${showId}/episodes`;

      const episodesResponse = await fetch(url);
      if (!episodesResponse.ok) {
        this.hasError = true;
        this.errorMessage = episodesResponse.statusText;
        return;
      }
      const jsonResponse = await episodesResponse.json();
      this.isLoading = false;
      this.episodes = jsonResponse as IEpisode[];
    },
  },
});
