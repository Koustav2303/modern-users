import { useState } from 'react';
import { users } from './data/users';
import Sidebar from './components/Sidebar';
import UserDetails from './components/UserDetails';

function App() {
  const [activeUser, setActiveUser] = useState(users[0]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12">
      
      {/* flex-col-reverse: Mobile (Sidebar bottom, Details top)
        md:flex-row: Desktop (Sidebar left, Details right)
      */}
      <div className="glass-panel w-full max-w-7xl h-[85vh] flex flex-col-reverse md:flex-row overflow-hidden relative">
        
        <Sidebar 
          users={users} 
          activeUser={activeUser} 
          setActiveUser={setActiveUser} 
        />
        
        <UserDetails 
          activeUser={activeUser} 
        />
        
      </div>
    </div>
  );
}

export default App;