import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileDetails from './components/ProfileDetails';
import EditProfileModal from './components/EditProfileModal';
import './App.css';

function App() {
  const [profile, setProfile] = useState({
    name: 'Diluka',
    email: 'diluka.w@nsbm.ac.lk',
    points: 0,
    avatarUrl: '/assets/avatar.jpg'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="app-container">
      {/* App Bar */}
      <div className="app-bar">
        <h1>My Profile</h1>
      </div>

      {/* Scrollable Content */}
      <div className="content-scroll">
        <ProfileCard name={profile.name} avatarUrl={profile.avatarUrl} />
        <ProfileDetails 
          name={profile.name} 
          email={profile.email} 
          points={profile.points} 
        />
      </div>

      {/* Floating Action Button */}
      <button className="fab" onClick={() => setIsModalOpen(true)}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

      {/* Edit Modal */}
      <EditProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialData={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}

export default App;
