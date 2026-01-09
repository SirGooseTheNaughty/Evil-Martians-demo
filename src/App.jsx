import { Login } from './components/Login/Login';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="intro">
          <h1>Evil Martians demo</h1>
          <p>
            I welcome Evil Martians to this demo!
            Please use an email "valid@email.com" for the happy path and literally any other for the unhappy one.
          </p>
        </div>

        <Login />
      </div>
    </div>
  )
}

export default App
