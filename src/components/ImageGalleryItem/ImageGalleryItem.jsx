import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../../components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { id, tags, webformatURL, largeImageURL } = this.props.image;

    return (
      <GalleryItem key={id} onClick={this.toggleModal}>
        <GalleryItemImage src={webformatURL} alt={tags} />
        {isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
