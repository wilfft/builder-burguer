import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-burguer-36dbe-default-rtdb.firebaseio.com/",
});

export default axiosInstance;
