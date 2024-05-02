import { request } from "../api/api";
import { API_URL } from "../api/apiUrls";

//Component 2
export function addComponent2Services(params) {
    return request('POST', `${API_URL.COMPONENT2_ADD}`, params);
  }
  export function updateComponent2Services(params,data) {
    return request('PUT', `${API_URL.COMPONENT2_UPDATE}/${params}`, data);
  }
  export function getComponent2Services(params) {
    return request('GET', `${API_URL.COMPONENT2_GET}`, params);
  }
  export function getComponent2CountServices(params) {
    return request('GET', `${API_URL.COMPONENT2_GET_COUNT}`, params);
  }

  export const component1ervices = {
    addComponent2Services,
    updateComponent2Services,
    getComponent2Services,
    getComponent2CountServices
};