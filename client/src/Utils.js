import Cookies from "js-cookie";
import { Domain_Name } from "../constants";

export const getUser = async () => {
    const accessToken = Cookies.get('accessToken');
    try {
        const res = await fetch(`${Domain_Name}users/currentUser`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        })
        const data = await res.json();
        return data
    } catch (err) {
        console.log(err);
    }
}