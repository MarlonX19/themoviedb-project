import Routes from './routes';
import MoviesContextProvider from './context/moviesContext';


function App() {
  return (
    <MoviesContextProvider>
      <Routes />
    </MoviesContextProvider>
  )
}

export default App;
