import axios from "axios";
import Qs from "qs"

let url = "http://localhost:9000";

if (process.env.NODE_ENV !== "development") {
    url = "";
}

const globalAxios = axios.create({
    baseURL: url,
    paramsSerializer: function (params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'});
    },
})

export default globalAxios;