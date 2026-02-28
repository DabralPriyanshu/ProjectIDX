import API from "../config/axiosConfig";

export const createProjectApi = async () => {
  try {
    const response = await API.post("/projects");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
