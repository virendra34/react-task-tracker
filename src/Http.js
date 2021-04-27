const Http = ({ url, method, data = null, headers = { 'Content-type': 'application/json' } }) => {
    const res = null;
    if (method === 'GET') {
        res = await fetch(url);
    } else if (method === 'POST') {
        res = await fetch(url, {
            method,
            headers,
            body: data != null ? JSON.stringify(data) : null,
        });
    } else if (method === 'DELETE') {
        res = await fetch(url, {
            method,
        });
    } else if (method === 'PUT') {
        res = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(data)
        });
    }
    const data = await res.json();
    return data;
}

export default Http
