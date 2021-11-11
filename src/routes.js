import {
    Routes,
    Route
} from 'react-router-dom';
import Login from './Components/Pages/Login';

const FSRoutes = () => {
return(
    <Routes>
        <Route path="/" element={<Login/>} />
    </Routes>
    )
};

export default FSRoutes;