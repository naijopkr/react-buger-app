//Axios configurations for firebase
import axios from 'axios'

const axiosOrder = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_DB_URI
})

export default axiosOrder