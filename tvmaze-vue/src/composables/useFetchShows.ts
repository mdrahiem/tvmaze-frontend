import { ref, watch } from "vue";
import { IShow } from "../types";

const shows = ref<IShow[]>([]);

const isLoading = ref<boolean>(true);

const hasError = ref<boolean>(false);

const errorMessage = ref<string | null>(null);

const url = ref("https://api.tvmaze.com/shows");

const getShows = async (): Promise<IShow[]> => {
  isLoading.value = true;

  if (shows.value.length > 0) {
    return shows.value;
  }

  const response = await fetch(url.value);
  if (!response.ok) {
    throw Error("Error from fetch composable");
  }
  const jsonResponse = await response.json();
  if (jsonResponse) {
    updateRefs(jsonResponse);
  }
  return jsonResponse;
};

const updateRefs = (data: IShow[]) => {
  hasError.value = false;
  errorMessage.value = null;
  shows.value = data;
  isLoading.value = false;
};

const useFetchShows = () => {
  getShows();
  watch(url, getShows);
  return {
    shows,
    isLoading,
    hasError,
    count: shows.value.length,
    errorMessage,
  };
};

export default useFetchShows;
