import axios from "axios";


export function request(method, url, data) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const req = {
      method: method,
      url: url,
      data: data,
    };
    if (method === "GET") {
      req.params = data;
    }
    try {
      const res = await axios(req);
      return resolve(res.data);
    } catch (err) {
      return reject(err.response);
    }
  });
}
