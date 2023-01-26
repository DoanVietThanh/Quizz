import './App.css';
import Header from './components/Header/Header';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        ></Route>
        <Route
          path='/quiz'
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        ></Route>
        <Route
          path='/result'
          element={<Result name={name} score={score} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
