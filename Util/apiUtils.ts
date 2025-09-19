import { initApiContext } from "./apiContext";


export async function getUsers(page: number = 2) {
    const apiContext = await initApiContext();
    const response = await apiContext.get(`/users?page=${page}`);
    if(!response.ok())throw new Error('Failed API Call');
    return response.json();
}