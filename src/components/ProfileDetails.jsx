import './ProfileDetails.css';

export default function ProfileDetails({ name, email, points }) {
  return (
    <div className="profile-details">
      <div className="detail-item" style={{ animationDelay: '0.1s' }}>
        <div className="detail-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="detail-content">
          <span className="detail-label">Name</span>
          <span className="detail-value">{name}</span>
        </div>
      </div>

      <div className="detail-item" style={{ animationDelay: '0.2s' }}>
        <div className="detail-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <div className="detail-content">
          <span className="detail-label">Email</span>
          <span className="detail-value">{email}</span>
        </div>
      </div>

      <div className="detail-item" style={{ animationDelay: '0.3s' }}>
        <div className="detail-icon points-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div className="detail-content">
          <span className="detail-label">Points</span>
          <span className="detail-value">{points}</span>
        </div>
      </div>
    </div>
  );
}
