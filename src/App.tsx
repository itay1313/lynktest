import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuestionsLog from './pages/QuestionsLog'
import QuestionDetail from './pages/QuestionDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionsLog />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
      </Routes>
    </Router>
  )
}

export default App

