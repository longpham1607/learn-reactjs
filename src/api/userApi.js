import axiosClient from "./axiosClient";

const userApi = {
  
  update(data) {
    const url = `/auth/local/register`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
