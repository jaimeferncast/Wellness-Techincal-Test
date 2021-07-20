import axios from "axios"

class UsageService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/uses`,
      withCredentials: true,
    })
  }

  getUses = () => this.api.get("/")
  editUse = (use, id) => this.api.put(`/${id}`, use)
  deleteUse = (id) => this.api.delete(`/${id}`)
}

export default UsageService
