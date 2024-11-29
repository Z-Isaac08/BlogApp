import PopupForm from './components/popUpForm'
import PostList from './components/postList'
import './App.css'

function App() {

  return (
    <main className='min-h-screen bg-gray-100 p-6 space-y-5'>
      <PostList />
      <PopupForm />
    </main>
  )
}

export default App
