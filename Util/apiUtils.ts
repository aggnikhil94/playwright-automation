import { initApiContext } from "./apiContext";


export async function getUsers(page: number = 2) {
    const apiContext = await initApiContext();
    const response = await apiContext.get(`/users?page=2`);
 if (!response.ok()) {
    const errorText = await response.text();
    throw new Error(
      `Failed API Call: ${response.status()} ${response.statusText()}\nResponse: ${errorText}`
    );
  }
    return response.json();
}