import axios from 'axios';
import { User } from '../types/User';

const USER_API_URL = "http://localhost:8080/api/users";

class UserService {

    getUsers() {
        return axios.get(USER_API_URL)
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    return response.data;
                } else {
                    return [];
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des utilisateurs :", error);
                return [];
            });
    }

    createUser(user: User) {
        return axios.post(USER_API_URL, user);
    }

    getUserById(userId: number) {
        return axios.get(`${USER_API_URL}/${userId}`);
    }

    updateUserById(user: User, userId: number) {
        return axios.put(`${USER_API_URL}/${userId}`, user);
    }

    deleteUserById(userId: number) {
        return axios.delete(`${USER_API_URL}/${userId}`);
    }

}

export default new UserService();

