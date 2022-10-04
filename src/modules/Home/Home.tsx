import toast from 'react-hot-toast'

export function Home() {
  const toastMe = () => toast.success('Eai diboas?')

  return (
    <div className='app centered-col'>
      <p>Olá, bem-vindo!</p>
      <p>A casa está organizada, é só começar o/</p>
      <p>
        <button
          className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          onClick={toastMe}
        >
          Oi
        </button>
      </p>
    </div>
  )
}
