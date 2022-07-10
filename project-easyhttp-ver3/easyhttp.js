/**
* EasyHTTP Library
* Library for making HTTP requests

* @version 3.0.0
* @author yuliiiah
* @license GOD
*
**/

class EasyHTTP {
  // Make an HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'Application/json' },
    });

    const responseData = await 'Resource deleted...';
    return responseData;
  }
}
