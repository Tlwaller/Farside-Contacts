import Nav from './Components/Shared/Nav';
import routes from './routes';
import './Styles/main.scss';

const App = () => {
  return (
    <div className="app">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;