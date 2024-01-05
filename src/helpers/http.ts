const http = () => {
    const request = async (
      url: string,
      method: string = 'GET',
      body: null = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      const result = await fetch(url, { method, body, headers });
  
      if (!result.ok) {
        throw new Error(`Error in path ${url} status ${result.status}`);
      }
  
      return await result.json();
    };
  
    return { request };
  };
  export default http;