import * as React from 'react';
import UserList from './components/UserList';

interface IAppProps {
}

const App: React.FC<IAppProps> = () => {
  return <main>
    <h1>List Of Users</h1>
    <UserList/>
  </main>
};

export default App;
