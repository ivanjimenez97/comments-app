import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";

// Define the base URL for the API
const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // Make sure Vite environment variables are typed
});

// Request interceptor to attach the token to the headers
axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = Cookies.get("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for handling common errors
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response; // Return the successful response
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response?.status === 401) {
      Cookies.remove("token");
      // Optionally reload the page if needed
      // window.location.reload();
    } else if (response?.status === 404) {
      // Handle 404 - Not Found error logic
      // You can add logic here to show a notification or navigate to a 404 page
    }

    // Re-throw the error to handle it in the calling code
    throw error;
  }
);

export default axiosClient;
