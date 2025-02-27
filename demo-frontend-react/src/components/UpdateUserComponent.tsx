import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import UserService from '../service/UserService';


const UpdateUserComponent = () => {
    const { id } = useParams();

    const [firstname, setFirstName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [pseudo, setPseudo] = useState<string>('');
    
    const idUser = Number(id);

    const navigate = useNavigate();

    useEffect(() => {
        UserService.getUserById(idUser).then((res) => {
            const user = res.data;
            setFirstName(user.firstname);
            setLastName(user.lastname);
            setPseudo(user.pseudo);
        });
    }, [idUser]);

    const updateUser = (e: React.FormEvent) => {
        e.preventDefault();
        const user = {id: idUser, firstname, lastname, pseudo };
        UserService.updateUserById(user, idUser).then(() => {
            navigate('/users');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Modifier un utilisateur</h3>
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
                                <button className="btn btn-success" onClick={updateUser}>Sauvegarder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserComponent;