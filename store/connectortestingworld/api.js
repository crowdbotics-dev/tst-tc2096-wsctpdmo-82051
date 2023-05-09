import axios from "axios"
import {
  CONNECTORTESTINGWORLD_USERNAME,
  CONNECTORTESTINGWORLD_PASSWORD
} from "react-native-dotenv"
const connectortestingworld = axios.create({
  baseURL: "https://google.com",
  auth: {
    username: CONNECTORTESTINGWORLD_USERNAME,
    password: CONNECTORTESTINGWORLD_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function connectortestingworld_get_testing_test_path_cool_read(payload) {
  return connectortestingworld.get(
    `/testing/${payload.test}/${payload.path}/${payload.cool}`
  )
}
export const apiService = {
  connectortestingworld_get_testing_test_path_cool_read
}
