import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const query = {
  getAllProducts: async () => {
    try {
      let result = await api.get("/products");
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default query