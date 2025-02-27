import {useState, useEffect} from 'react';
import { Link } from 'react-router';
import UserService from '../service/UserService';
import { User } from '../types/User';


const UserListComponent = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        UserService.getUsers().then((users: User[]) => {
            setUsers(users);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Liste des utilisateurs</h2>
            <div className="row">
                <Link to="/add-user" className="btn btn-primary">Ajouter un utilisateur</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Pseudo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.pseudo}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`} className="btn btn-info">Mettre à jour</Link>
                                    <button className="btn btn-danger" onClick={() => UserService.deleteUserById(user.id!).then(() => setUsers(users.filter(u => u.id !== user.id)))}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserListComponent;