import Main from '../components/Main'
import Header from '../components/Header'
import Page from '../components/Page'
import { Redirect } from 'react-router-dom'

export default function Start(token) {
  if (!token) {
    return <Redirect to="/" />
  }

  return (
    <Page>
      <Main>
        <Header title="The Best Books" />
        <h3>Startseite</h3>
      </Main>
    </Page>
  )
}
