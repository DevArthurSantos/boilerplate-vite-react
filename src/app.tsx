import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { AppContextProvider } from '@infra/utils/Context/provider'
import "@infra/styles/global.css"
import Routers from './routers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppContextProvider>
      <Routers />
    </AppContextProvider>
  </StrictMode>
)