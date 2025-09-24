import { request, APIRequestContext } from "@playwright/test";

let apiContext: APIRequestContext;
export let baseURL = 'https://reqres.in/api';
export async function initApiContext(): Promise<APIRequestContext> {
    if (!apiContext) {
        apiContext = await request.newContext({
            baseURL,
            extraHTTPHeaders: {
                'Accept': 'application/json'
            }
        });
    }
    console.log("Base URL in use:", baseURL);
    return apiContext;
}

export async function disposeApiContext(): Promise<void> {
    if (apiContext) {
        await apiContext.dispose();
    }
}