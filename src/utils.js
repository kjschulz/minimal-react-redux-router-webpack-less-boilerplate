'use strict';
import 'whatwg-fetch';

export default {
  /**
   * Fetch Requests
   * @returns {Promise}
   */
  request(url, method, body) {
    let opts = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: method
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return fetch(url, opts).then(req => req.json());
  }
};
