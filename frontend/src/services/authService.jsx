import axios from "axios"

export const login = (data, callback) => {
  axios.post("http://localhost:8000/api/v1/login", data).then((res) => {
      // console.log(res.data);
      callback(true, res.data.token)
  })
  .catch((err) => {
      // console.log(err)
      callback(false, err)
  })
}
