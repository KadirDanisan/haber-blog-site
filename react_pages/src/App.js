import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignUp/LoginSignup';
import Categories from './Components/Categories/Categories';

function App() {
  const categoriesData = [
    { id: 1, name: 'Teknoloji' },
    { id: 2, name: 'Spor' },
    { id: 3, name: 'Sağlık' },
    ];
  return (
    <div>
       <LoginSignup/>
       <Categories categories={categoriesData} />
    </div>
  );
}

export default App;
