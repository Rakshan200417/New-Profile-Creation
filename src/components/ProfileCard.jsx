import './ProfileCard.css';

export default function ProfileCard({ name, avatarUrl }) {
  return (
    <div className="profile-card">
      <div className="avatar-container">
        <div className="avatar-halo">
          <img src={avatarUrl} alt="Profile" className="avatar-image" />
        </div>
        <div className="verified-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
      <h2 className="profile-name">{name}</h2>
      <div className="separator"></div>
    </div>
  );
}
