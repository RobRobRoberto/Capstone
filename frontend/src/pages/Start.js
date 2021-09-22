import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

export default function Start({ onLogout }) {
  return (
    <div>
      <Navbar submitLogout={onLogout} />
      <Cards />
    </div>
  )
}
