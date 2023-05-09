import axios from "axios"
import {
  NEW_CONNECTORTESRTYY_USERNAME,
  NEW_CONNECTORTESRTYY_PASSWORD
} from "react-native-dotenv"
const newConnectortesrtyy = axios.create({
  baseURL: "https://google.com",
  auth: {
    username: NEW_CONNECTORTESRTYY_USERNAME,
    password: NEW_CONNECTORTESRTYY_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function newconnectortesrtyy_get_testujfn_test_testing_read(payload) {
  return newConnectortesrtyy.get(`/testujfn/${payload.test}/${payload.testing}`)
}
export const apiService = { newconnectortesrtyy_get_testujfn_test_testing_read }
