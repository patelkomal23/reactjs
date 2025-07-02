import axios from "axios";

const apiInstance = axios.create({
      databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL

})

export default apiInstance;