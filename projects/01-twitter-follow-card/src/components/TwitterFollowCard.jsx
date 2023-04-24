import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialFollowing }) {
  const [isFollowing, setFollowing] = useState(initialFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'follow-card-button is-following'
    : 'follow-card-button'

  const handleClick = () => {
    setFollowing(!isFollowing)
  }

  return (
    <article className="follow-card">
      <header className="follow-card-header">
        <img
          className="follow-card-avatar"
          src={`https://unavatar.io/github/${userName}`}
          alt={`${userName} avatar`}
        />
        <div className="follow-card-info">
          <strong>{children}</strong>
          <span className="follow-card-info-username">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="follow-card-text">{text}</span>
          <span className="follow-card-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
