import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <div>
      <h1>Chromatic Quest</h1>
      <App />
    </div>
,
)
