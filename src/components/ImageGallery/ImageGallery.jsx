import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  gallary: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
)}