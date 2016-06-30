# Fetchy
Simple HTTP package using the new Fetch API.
Only 'GET' and 'POST' requests are supported for now.

**All responses default to JSON unless specified otherwise**

# Installation

## GITHUB

	git clone https://github.com/vjrngn/fetchy/

## NPM

	npm install 'digit-fetchy'

# Usage
In any file :

	var http = require('digit-fetchy');

## GET requests

*Simple GET request with default headers*

	  http.get('some/url/here.com')
	    .then(response => {
	      console.log(response);
	    })
	    .catch(errors => {
	      console.log(errors)
	    });

*GET request with custom headers*

	  let headers = {
	    'Accept': 'application/json',
	    'x-custom-header': 'foo'
	  };

	  http.get('some/url/here.com', headers)
	    .then(response => {
	      // json response here.
	    })
	    .catch(errors => {
	      // any errors here
	    });

## POST requests

*Simple POST request with default headers*

	  let data = {
	    name: 'John',
	    password: 'foobar'
	  };

	  http.post('some/url/here.com', data)
	    .then(response => {
	      // json response here
	    })
	    .catch(errors => {
	      // any errors here
	    });

*POST request with custom headers*

	  let data = {
	    name: 'John',
	    password: 'foobar'
	  };

	  let headers = {
	    'x-foo': 'bar'
	  };

	  http.post('some/url/here.com', data, headers)
	    .then(response => {
	      // json response here
	    })
	    .catch(errors => {
	      // any errors here
	    });

Request Options:

| Request Options | Description                                                                                                                                                                                                                             | Values                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mode            | The mode contains the mode of the request (e.g., cors, no-cors, cors-with-forced-preflight, same-origin.) This is used to determine if cross-origin requests lead to valid responses, and which properties of the response are readable | same-origin: If a request is made to another origin with this mode set, the result is simply an error. You could use this to ensure that a request is always being made to your origin  no-cors — Prevents the method from being anything other than HEAD, GET or POST.  cors — Allows cross-origin requests, for example to access various APIs offered by 3rd party vendors. |
| credentials     | Indicates whether the user agent (browser) should send cookies from the other domain in the case of cross-origin requests. This is similar to XHR’s withCredentials flag, but with three available values (instead of two).             | omit: Never send cookies.  same-origin: Only send cookies if the URL is on the same origin as the calling script.  include: Always send cookies, even for cross-origin calls (Default)                                                                                                                                                                                         |
| cache           | Indicates the cache mode of the request.                                                                                                                                                                                                | default  no-store  reload  no-cache  force-cache                                                                                                                                                                                                                                                                                                                               |
