// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import { useCounterStore } from './store'
import Form from './pages/Form'
import FormikForm from './pages/FormikForm'
import Pokemon from './pages/Pokemon'

function Home() {
  const { count, increment } = useCounterStore()
  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Hello World</h1>
        <button onClick={increment} className="mt-3 bg-purple-600 text-white px-4 py-2 rounded">
          Clicks: {count}
        </button>
      </div>
  )
}

export default function App() {
  return (
      <>
        <nav className="flex gap-4 p-4 bg-gray-100">
          <Link to="/">Home</Link>
          <Link to="/form">RHF</Link>
          <Link to="/formik">Formik</Link>
          <Link to="/pokemon">Pokemon</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/formik" element={<FormikForm />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </>
  )
}