import { useState } from 'react';
import { useNavigate } from 'react-router';
import UserService from '../service/UserService';
import axios from 'axios';

const AddUserComponent = () => {
    const [firstname, setFirstName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [pseudo, setPseudo] = useState<string>('');

    const navigate = useNavigate();

    const saveUser = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = {firstname, lastname, pseudo };
    
        try {
            await UserService.createUser(user);
            navigate('/users');
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Erreur lors de l'ajout de l'utilisateur :", error);
                alert(`Erreur : ${error.response?.data?.message || "Impossible d'ajouter l'utilisateur."}`);
            } else {
                console.error("Erreur inattendue :", error);
                alert("Une erreur inconnue s'est produite.");
            }
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Ajouter un utilisateur</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Prénom : </label>
                                    <input placeholder="Prénom.." name="firstname" className="form-control"
                                        value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Nom : </label>
                                    <input placeholder="Nom.." name="lastname" className="form-control"
                                        value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Pseudo : </label>
                                    <input placeholder="Pseudo.." name="pseudo" className="form-control"
                                        value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveUser}>Sauvegarder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserComponent;
