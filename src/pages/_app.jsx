import '../styles/globals.scss'

import { ProfileProvider } from '../contexts/ProfileContext'

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  )
}

export default MyApp
