import Main from '../components/Main'
import Header from '../components/Header'
import Page from '../components/Page'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <Page>
      <Main>
        <Header title="The Best Books" />
        <h3>Startseite</h3>
        <Link to="/library">Library</Link>
      </Main>
    </Page>
  )
}
