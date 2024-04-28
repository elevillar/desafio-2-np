import { createContext, useEffect, useState } from 'react'

export const PhotosContext = createContext()

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])

  const getData = async () => {
    const response = await fetch('public/photos.json')
    const data = await response.json()
    console.log(data)
    const allData = data.photos
    setPhotos(allData)
  }

  useEffect(() => {
    getData()
  }, [])

  return(
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  )
}

export default PhotosProvider
