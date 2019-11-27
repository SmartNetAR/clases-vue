const apiCall = async ( {url, method, ...args} ) => {
  const baseUrl = 'http://localhost:8000/api/'
  const settings = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('user-token')
    },
    body: JSON.stringify(args.data)
  }
  try {
    const response = await fetch(baseUrl + url, settings)
    const json = await response.json()
    if (response.status !== 200) throw Error(json.error);
    return json;
  } catch (error) {
    throw Error(error);
  }
}

export default apiCall