# Fetchy
Simple HTTP package using the new Fetch API.

**All responses default to JSON unless specified otherwise**

# Installation

## GITHUB

	git clone https://github.com/vjrngn/fetchy/

## NPM

	npm install 'digit-fetchy'

# Usage
In any file :

	var http = require('digit-fetchy');

## GET request

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

## POST request

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

## PUT request

        let data = {
	    name: 'John',
	    password: 'foobar'
	  };

	  let headers = {
	    'x-foo': 'bar'
	  };

	  http.put('some/url/here.com', data, headers)
	    .then(response => {
	      // json response here
	    })
	    .catch(errors => {
	      // any errors here
	    });


### Request Options

| Request Options | Description                                                                                                                                                                                                                             | Values                                                                                |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| mode            | The mode contains the mode of the request (e.g., cors, no-cors, cors-with-forced-preflight, same-origin.) This is used to determine if cross-origin requests lead to valid responses, and which properties of the response are readable | **same-origin**,  **no-cors**, **cors** (default)                                     |
| credentials     | Indicates whether the user agent (browser) should send cookies from the other domain in the case of cross-origin requests. This is similar to XHR’s withCredentials flag, but with three available values (instead of two).             | **omit**,  **same-origin**,  **include** (default)                                    |
| cache           | Indicates the cache mode of the request.                                                                                                                                                                                                | **default** (default),    **no-store** ,  **reload**,  **no-cache**,  **force-cache** |
