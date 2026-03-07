import API from "../config/axiosConfig";

export const createProjectApi = async () => {
  try {
    const response = await API.post("/projects");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProjectTree = async ({ projectId }) => {
  try {
    const response = await API.get(`/projects/${projectId}/tree`);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};
