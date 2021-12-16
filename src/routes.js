import {
    Routes,
    Route
} from 'react-router-dom';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import ServiceQueue from './Components/Pages/ServiceQueue';

const FSRoutes = () => {
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/queue" element={<ServiceQueue/>}/>
    </Routes>
    )
};

export default FSRoutes;