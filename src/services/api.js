import axios from "axios";
import { apiConfig } from "../config/apiConfig";

export function getBase(config = apiConfig) {
  return `${config.protocol}://${config.host}`;
}

export function getDataApiBaseUrl(config = apiConfig) {
  return `${getBase(config)}/${config.dataApiUrl}`;
}

export function callAPI(requestConfig) {
  return axios(requestConfig);
}

export function setHeaders(requestConfig) {
    console.log(requestConfig);
  if (!requestConfig.headers) {
    requestConfig.headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
  }

  return requestConfig;
}
