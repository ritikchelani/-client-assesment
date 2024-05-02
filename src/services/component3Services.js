import { request } from "../api/api";
import { API_URL } from "../api/apiUrls";

//Component 3
export function addComponent3Services(params) {
    return request("POST", `${API_URL.COMPONENT3_ADD}`, params);
  }
  export function updateComponent3Services(params, data) {
    return request("PUT", `${API_URL.COMPONENT3_UPDATE}/${params}`, data);
  }
  export function getComponent3Services(params) {
    return request("GET", `${API_URL.COMPONENT3_GET}`, params);
  }
  export function getComponent3CountServices(params) {
    return request("GET", `${API_URL.COMPONENT3_GET_COUNT}`, params);
  }
  
  export const component1ervices = {
    addComponent3Services,
    updateComponent3Services,
    getComponent3Services,
    getComponent3CountServices,
  };
  