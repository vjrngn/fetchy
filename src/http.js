let defaults = {
  headers: {
    'Content-Type': 'application/json'
  },

  options: {
    mode: 'cors'
  }
};

/**
 * HTTP service for easy AJAX calls
 */
module.exports = {

  /**
   * HTTP 'GET' request
   *
   * @param  {String} uri
   * @param  {Object} headers
   * @param  {Object} options
   *
   * @return {Promise} Response data in json format.
   */
  get: function(uri, headers = {}, options = {}) {
    let customHeaders = Object.assign(defaults.headers, headers)

    var req = new Request(uri, {
      method: 'GET',
      mode: options.mode || defaults.options.mode,
      headers: new Headers(customHeaders)
    });

    window.req = req;

    return new Promise((resolve, reject) => {
      fetch(req)
        .then(response => resolve(response.json()))
        .catch(err => reject(err))
    });
  },

  /**
   * HTTP 'POST' request
   *
   * @param  {String} uri
   * @param  {Object} data
   * @param  {Object} headers
   * @param  {Object} options
   *
   * @return {Promise} Response data in json format.
   */
  post: function(uri, data, headers = {}, options = {}) {
      let customHeaders = Object.assign(defaults.headers, headers)

      var req = new Request(uri, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: options.mode || defaults.options.mode,
        headers: new Headers(customHeaders)
      })


      return new Promise((resolve, reject) => {
        fetch(req)
          .then(response => resolve(resonse.json()))
          .catch(err => reject(err))
      });
  }
};
