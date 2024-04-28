import { useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext'
import Gallery from '../components/Gallery'
import { Container } from 'react-bootstrap'

const Favorites = () => {
  const { photos } = useContext(PhotosContext)

  return (
    <div>
      <Container className='text-center pt-3'>
        <h1 className='text-success'>Fotos favoritas</h1>
        <div className="p-3 gallery grid-columns-4">
          {photos && photos.filter(photo => photo['liked']).map((photo) => (
            <Gallery key={photo.id} photo={photo} />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Favorites;
