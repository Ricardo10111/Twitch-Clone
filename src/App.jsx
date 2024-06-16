import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Content from './components/Content'
export default function App() {
  return (
    <main className='w-full min-h-screen grid grid-cols-[16%_1fr] grid-rows-[3.5rem_1fr] p-0'>
      <NavBar />
      <Menu />
      <Content />
    </main>
  )
}
