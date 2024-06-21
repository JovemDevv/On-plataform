import { Link } from 'react-router-dom'

export function Blank() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      <div>Selecione ou crie um documento</div>
      <Link to="/document">Acessar documento</Link>
    </main>
  )
}
