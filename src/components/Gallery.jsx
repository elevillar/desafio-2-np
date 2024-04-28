import '../main.css'
import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'
import { PhotosContext } from '../context/PhotosContext'
import { useContext } from 'react'

const Gallery = ({ photo }) => {
  const { photos, setPhotos } = useContext(PhotosContext)

  const likedFavorites = (id) => {
    const addPhotos = photos.map(photo => {
      if (photo['id'] === id)
        return {
          ...photo,
          liked: !photo['liked']
        }
      return photo
    })
    setPhotos(addPhotos)
  }

  return (
    <div>
      <Card className='photo' style={{ backgroundImage: `url(${photo['src'].tiny})` }}>
        <div className='card-overlay'>
          <span onClick={() => likedFavorites(photo['id'])}>
            <IconHeart filled={photo['liked']} />
          </span>
        </div>
        <div className='card-footer'>
          <Card.Text>{photo['alt']}</Card.Text>
        </div>
      </Card>
    </div>
  )
};
export default Gallery
