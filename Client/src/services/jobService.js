import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/jobs`;

export const getJobs = async () => {

  const response = await axios.get(API);

  return response.data;
};