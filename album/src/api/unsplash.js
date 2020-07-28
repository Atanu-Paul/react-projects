import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID EgSP0zxWhLAAqd3OVtWFL6JNN3vNiLVYPSVlFkUJqRo",
  },
});
