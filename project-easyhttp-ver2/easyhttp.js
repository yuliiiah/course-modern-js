/**
* EasyHTTP Library
* Library for making HTTP requests

* @version 2.0.0
* @author yuliiiah
* @license GOD
*
**/

class EasyHTTP {
  // Make an HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: { 'Content-type': 'Application/json' },
      })
        .then((res) => res.json())
        .then(() => resolve('Resource deleted...'))
        .catch((err) => reject(err));
    });
  }
}
