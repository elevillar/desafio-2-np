import { useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext'
import Gallery from '../components/Gallery'
import { Container } from 'react-bootstrap'

const Home = () => {

  const { photos } = useContext(PhotosContext)

  return (
    <div>
      <h1 className='text-success text-center pt-3'>Natural Pic</h1>
      <Container className='text-center gallery grid-columns-5 pt-3'>
        {photos && photos.map(photo => (
          <Gallery key={photo.id} photo={photo} />
        ))}
      </Container>
    </div>
  );
};
export default Home
