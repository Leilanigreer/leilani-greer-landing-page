import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="bg-violet-400 p-4">
      <nav>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="text-white hover:text-violet-900"> Home Page</Link>
          <Link to="/2" className="text-white hover:text-violet-900"> Home Page 2</Link>
          <Link to="/4" className="text-white hover:text-violet-900"> Home Page 4</Link>
          <Link to="/5" className="text-white hover:text-violet-900"> Home Page 5</Link>
          <Link to="/" className="text-white hover:text-violet-900"> About Me</Link>
          <Link to="/projects" className="text-white hover:text-violet-900"> Projects</Link>
        </div>
      </nav>
    </header>
  )
}