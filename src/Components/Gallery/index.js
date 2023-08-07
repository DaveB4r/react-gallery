import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useAppContext } from "../../AppProvider";

const Gallery = () => {

  const { userLogin, userGallery, dispatch } = useAppContext();
  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState([]); 
  const userHasGallery = userGallery.find(user => user.user === userLogin.name);
  
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      .then(response => response.json())
      .then(json => {
        setImages(json)
      });
  }, []);
  
  const addGallery = () => {
    const myGallery = {
      user: userLogin.name,
      gallery: userHasGallery ? [...userHasGallery.gallery, ...gallery] : gallery
    }
    dispatch({ type: 'ADD_GALLERY', value: myGallery });
  }

  const handleClick = (e, url) => {
    e.target.classList.toggle('opacity-40');
    const indexOf = gallery.indexOf(url);
    if (indexOf < 0) {
      setGallery((gallery) => [...gallery, url])
    } else {
      const updatedGallery = gallery.filter(photo => photo !== url);
      setGallery(updatedGallery);
    }
  }

  

  return (
    <div>
      {userLogin.name ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
            {
              images.filter(image => userHasGallery ? !userHasGallery.gallery.includes(image.urls.small) : true ).map((image) => (
                <div key={image.id}>
                  <label
                    htmlFor={image.id}
                  >
                    <input
                      type="checkbox" 
                      id={image.id}
                      className="absolute w-12 h-12 "
                    />
                    <img src={image.urls.small} alt={image.alt_description} className="h-96 w-96 rounded-lg cursor-pointer opacity-40" onClick={(e) => handleClick(e, image.urls.small)} />
                  </label>
                </div>
              ))
            }
          </div>
          <Button onClick={addGallery}>Save Gallery</Button>
        </div>
      ) : (
        <p>please login</p>
      )}

    </div>
  );
}

export default Gallery;