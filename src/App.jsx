import { useState } from 'react';
import { users } from './data/users';
import Sidebar from './components/Sidebar';
import UserDetails from './components/UserDetails';

function App() {
  const [activeUser, setActiveUser] = useState(users[0]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12">
      
      {/* Main Glassmorphism Container */}
      <div className="glass-panel w-full max-w-6xl h-[80vh] flex overflow-hidden">
        
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