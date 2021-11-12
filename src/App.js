import Nav from './Components/Shared/Nav';
import FSRoutes from './routes';
import './Styles/main.scss';

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <FSRoutes/>
    </div>
  );
}

export default App;