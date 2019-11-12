 async function handleResponse(response) {
     debugger;
    if (response.status===200) {
        return response.data
    }

    const error = await response;
    throw error;
}

export default handleResponse;