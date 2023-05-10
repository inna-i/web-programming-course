import UserList from './componets/Users/UsersList.component';
import './App.css';
import SideMenu from './componets/SideMenu/SideMenu.component';

function App() {
  return (
    <div className="App">
      <SideMenu />
     <UserList />
    </div>
  );
}

export default App;
