import Navbar from '../components/Navbar'
import BestList from '../components/BestList'

export default function NewYorkTimesBestList({ onLogout }) {
  return (
    <div>
      <Navbar submitLogout={onLogout} />
      <BestList />
    </div>
  )
}
