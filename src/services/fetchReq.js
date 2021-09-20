const fetchReq = (url, method = 'GET', body) => {
  return fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(res => res.json());
};

export default fetchReq;
