import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Bar from './Bar'

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/bar" element={<Bar />} />
      <Route path="*" element={<App />} />
    </Routes>
  </HashRouter>
)

export default Router
