import axios from "axios"

class UsesService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/uses`,
      withCredentials: true,
    })
  }

  getuses = () => this.api.get("/")
}

export default UsesService
