import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({image }) => {
  const {id, tags, webformatURL} = image;
    return (
    <GalleryItem key={id}>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
