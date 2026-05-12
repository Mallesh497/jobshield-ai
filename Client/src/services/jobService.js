import axios from "axios";

const API = "http://localhost:5000/api/jobs";

export const getJobs = async () => {
  const response = await axios.get(API);

  return response.data;
};