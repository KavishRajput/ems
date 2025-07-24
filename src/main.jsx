import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './Layout.jsx'
import { ApiProvider } from '../context/ApiContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
      <Layout />
    </ApiProvider>
  </StrictMode>,
)
