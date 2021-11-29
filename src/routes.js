import {
    Routes,
    Route
} from 'react-router-dom';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';

const FSRoutes = () => {
return(
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
    )
};

export default FSRoutes;