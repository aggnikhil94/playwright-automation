import { request, APIRequestContext } from "@playwright/test";

let apiContext: APIRequestContext;

export async function initApiContext(): Promise<APIRequestContext> {
    if (!apiContext) {
        apiContext = await request.newContext({
            baseURL: 'https://reqres.in/api',
            extraHTTPHeaders: {
                'Accept': 'application/json'
            }
        });
    }

    return apiContext;
}

export async function disposeApiContext(): Promise<void> {
    if (apiContext) {
        await apiContext.dispose();
    }
}