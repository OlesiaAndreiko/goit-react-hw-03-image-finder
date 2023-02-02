import { GallaryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({gallary}) => {

  return (
    <GallaryList>
      {gallary.map(image => (
        <ImageGalleryItem key={image.id} image={image} >          
          </ImageGalleryItem>))}
    </GallaryList>
  );
};