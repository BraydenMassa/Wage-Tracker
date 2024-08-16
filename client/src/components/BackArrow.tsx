import { Link } from 'react-router-dom'
type Props = {
  id: string
}

const BackArrow = ({ id }: Props) => {
  return (
    <Link className='back-arrow' to='/' id={id}>
      <img
        width='50px'
        height='50px'
        className='back-arrow-img'
        id={id + '-img'}
        src='../../public/assets/back-arrow.png'
        alt='back-arrow'
      />
    </Link>
  )
}

export default BackArrow
