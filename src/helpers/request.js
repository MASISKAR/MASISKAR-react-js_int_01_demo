function request(url, method='GET', body){
    const config = {
        method: method,
        headers: {
            "Content-Type": 'application/json',
            "mode": 'no-cors'
        }
    };

    if(body){
        config.body = JSON.stringify(body);
    }

   return fetch(url, config)
        .then((response) => response.json())
        .then((result) => {
            if (result.error) {
                throw result.error;
            }

            return result;
        });
}

export default request;