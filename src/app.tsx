import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { AppContextProvider } from '@infra/utils/Context/provider'
import Routers from './routers'
import GlobalStyle from '@infra/styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppContextProvider>
      <Routers />
      <GlobalStyle />
    </AppContextProvider>
  </StrictMode>
)