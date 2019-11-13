
import handleLoading from "./handleLoading";
async function handleResponse(response) {
    if (response.status === 200) {

        handleLoading(false);
        return response.data
    }

    const error = await response;
    throw error;
}

export default handleResponse;