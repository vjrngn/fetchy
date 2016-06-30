let defaults = {
  headers: {
    'Content-Type': 'application/json'
  },

  options: {
    cache: 'default',
    credentials: 'include',
    mode: 'cors'
  }
};


/**
 * Build custom headers.
 *
 * @param  {Object} headers User provided headers
 * @return {Object}         Mixed object from defaults and user provided headers.
 */
var _buildHeaders = function(headers) {
  let build = Object.assign(defaults.headers, headers)

  return build;
}

var _buildRequest = function(uri, method, data, headers, options) {
  var options = options || {};
  return new Request(uri, {
    method: method,
    data: data ? JSON.stringify(data) : '',
    mode: options.mode || defaults.options.mode,
    cache: options.cache || defaults.options.cache,
    credentials: options.credentials || defaults.options.credentials,
    headers: new Headers(headers)
  });
}

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
    let customHeaders = _buildHeaders(headers),
        req = _buildRequest(uri, 'GET', customHeaders, options)


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
      let customHeaders = _buildHeaders(headers),
          req = _buildRequest(uri, 'POST', data, customHeaders, options);

      return new Promise((resolve, reject) => {
        fetch(req)
          .then(response => resolve(response.json()))
          .catch(err => reject(err))
      });
  },

  /**
   * HTTP 'PUT' request
   *
   * @param  {String} uri
   * @param  {Object} data
   * @param  {Object} headers
   * @param  {Object} options
   *
   * @return {Promise} Response data in json format.
   */
  put: function(uri, data, headers = {}, options = {}) {
    let customHeaders = _buildHeaders(headers),
        req = _buildRequest(uri, 'PUT', data, customHeaders, options)

      return new Promise((resolve, reject) => {
        fetch(req)
          .then(response => resolve(response.json()))
          .catch(error => reject(error));
      });
    }
};
