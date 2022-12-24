
import { Provider } from 'react-redux'
import { store } from '../state/store/store'

// Import global store

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp