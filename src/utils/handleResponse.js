 async function handleResponse(response) {
    if (response.status===200) {
        return response.data
    }

    const error = await response.text();
    throw error;
}

export default handleResponse;