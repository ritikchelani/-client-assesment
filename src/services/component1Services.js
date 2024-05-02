import { request } from "../api/api";
import { API_URL } from "../api/apiUrls";

//Component 1
export function addComponent1Services(params) {
  return request("POST", `${API_URL.COMPONENT1_ADD}`, params);
}
export function updateComponent1Services(params, data) {
  return request("PUT", `${API_URL.COMPONENT1_UPDATE}/${params}`, data);
}
export function getComponent1Services(params) {
  return request("GET", `${API_URL.COMPONENT1_GET}`, params);
}
export function getComponent1CountServices(params) {
  return request("GET", `${API_URL.COMPONENT1_GET_COUNT}`, params);
}

export const component1ervices = {
  addComponent1Services,
  updateComponent1Services,
  getComponent1Services,
  getComponent1CountServices,
};
