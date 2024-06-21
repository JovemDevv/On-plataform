import { Routes } from './Routes'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './styles/global.css'

export function App(): JSX.Element {
  return (
    <div className="h-screen w-screen bg-rotion-900 text-rotion-100 flex">
      <Sidebar />

      <div className="flex flex-col flex-1 max-h-screen overflow-hidden">
        <Header />
        <Routes />
      </div>
    </div>
  )
}
