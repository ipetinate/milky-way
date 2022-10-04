import { Typography } from 'components/Typography'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <h1 className='text-3xl font-semibold centered-col'>
      <p>
        <Typography as='h1'>Página não encontrada</Typography>
      </p>

      <p>
        <Link className='underline' to='/'>
          <Typography as='p'>Voltar ao início</Typography>
        </Link>
      </p>
    </h1>
  )
}
