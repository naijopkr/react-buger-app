import axios from 'axios'

const axiosOrder = axios.create({
  baseURL: 'https://my-burger-app-6bcc0.firebaseio.com/'
})

export default axiosOrder