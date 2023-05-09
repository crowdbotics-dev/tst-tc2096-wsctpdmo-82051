import axios from "axios"
import {
  CONNECTORTESTING_USERNAME,
  CONNECTORTESTING_PASSWORD
} from "react-native-dotenv"
const connectortesting = axios.create({
  baseURL: "https://google.com",
  auth: {
    username: CONNECTORTESTING_USERNAME,
    password: CONNECTORTESTING_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function connectortesting_get_testing_year_read(payload) {
  return connectortesting.get(`/testing/${payload.year}`)
}
export const apiService = { connectortesting_get_testing_year_read }
