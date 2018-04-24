import axios from "./index";

export function login(username, password) {
    return axios.post("user/login", { username, password });
}

