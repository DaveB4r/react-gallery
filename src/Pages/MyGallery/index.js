import { useEffect, useState } from "react";
import { useAppContext } from "../../AppProvider";

const MyGallery = () => {
  const { userLogin, userGallery } = useAppContext();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    userGallery.filter(gallery => gallery.user === userLogin.name).map(image => {
      return setPhotos(image.gallery)
    })
  },[userGallery,userLogin]);
  return(
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2">
      {photos && (
        photos.map(photo => (
          <div key={photo} className="grid">
            <div>
              <img className="h-auto max-w-full rounded-lg shadow-md" src={photo} alt={photo}/>
            </div>
          </div>
        ))
      )}
      
    </div>
  );
}

export default MyGallery;