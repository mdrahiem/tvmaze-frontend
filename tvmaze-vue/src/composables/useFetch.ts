import { ref, watch } from "vue";

const data = ref<any>(null);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);
const baseURL = import.meta.env.API_URL;

const getShows = async (params: any) => {
  isLoading.value = true;
  if (data.value.length > 0) {
    return data.value;
  }
  const response = await fetch(baseURL + params);
  if (!response.ok) {
    throw Error("Error from fetch composable");
  }
  const jsonResponse = await response.json();
  if (jsonResponse) {
    updateRefs(jsonResponse);
  }
  watch(jsonResponse, (value) => updateRefs(value));
  return jsonResponse;
};

const updateRefs = (response: any) => {
  hasError.value = false;
  errorMessage.value = null;
  data.value = response;
  isLoading.value = false;
};

const useFetch = (params: any) => {
  getShows(params);
  watch(params, getShows);
  return {
    data,
    isLoading,
    hasError,
    errorMessage,
  };
};

export default useFetch;
