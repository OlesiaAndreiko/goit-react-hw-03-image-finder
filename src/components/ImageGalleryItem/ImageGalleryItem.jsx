import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../../components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  }

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
