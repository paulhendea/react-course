import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'paulhendea ',
    name: 'Paul Hendea',
    isFollowing: true,
  },
  {
    userName: 'edav03',
    name: 'Edison Alcocer',
    isFollowing: false,
  }
]

function App() {
  return (
    <section className="App">
      <h1 className="header">Twitter</h1>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}

export default App
