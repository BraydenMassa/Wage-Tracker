import { Link } from 'react-router-dom'
<<<<<<< HEAD
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
=======

const BackArrow = () => {
	return (
		<Link className='back-arrow' to='/'>
			<img
				width='50px'
				height='50px'
				className='back-arrow-img'
				src='../../public/assets/back-arrow.png'
				alt='back-arrow'
			/>
		</Link>
	)
>>>>>>> 956fba5c3e37223177728698a58d59d22a200e39
}

export default BackArrow
