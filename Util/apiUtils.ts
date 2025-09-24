import { baseURL, initApiContext } from "./apiContext";


export async function getUsers(page: number = 2) {
    const apiContext = await initApiContext();
    const response = await apiContext.get(baseURL + `/users?page=2`);
 if (!response.ok()) {
    const errorText = await response.text();
    throw new Error(
      `Failed API Calls: ${response.status()} ${response.statusText()}\nResponse: ${errorText}`
    );
  }
    return response.json();
}