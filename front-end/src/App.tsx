import { GlobalStyle } from './styles/global';
import { useState } from 'react';

import { UsersProvider } from './hooks/useUsers';
import { Header } from './components/Header';
import { UsersTable } from './components/UsersTable';
import { NewUserModal } from '../src/components/NewUserModal';

function App() {

  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);

  function handleNewUserModalOpen(){
    setIsNewUserModalOpen(true);
  }

  function hanldeNewUserModalClose(){
    setIsNewUserModalOpen(false);
  }

  return (
    <UsersProvider>
      <GlobalStyle />

      <NewUserModal 
        onCloseNewUserModal={hanldeNewUserModalClose} 
        isOpen={isNewUserModalOpen}
      />
      
      <Header onOpenNewUserModal={handleNewUserModalOpen} />

      <UsersTable />
    </UsersProvider>
  );
}

export default App;
