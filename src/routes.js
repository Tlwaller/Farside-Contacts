import {
    Routes,
    Route
} from 'react-router-dom';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';

const FSRoutes = () => {
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
    </Routes>
    )
};

export default FSRoutes;