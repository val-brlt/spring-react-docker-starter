import { BrowserRouter, Route, Routes } from 'react-router';
import UserListComponent from './components/UserListComponent';
import AddUserComponent from './components/AddUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<UserListComponent />} />
                    <Route path="/users" element={<UserListComponent />} />
                    <Route path="/add-user" element={<AddUserComponent />} />
                    <Route path="/update-user/:id" element={<UpdateUserComponent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
