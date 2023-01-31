// import axios from 'axios';
import { fetchImages } from '../sevices/fetchImages.service';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageSkeleton } from './ImageSkeleton/ImageSkeleton';
import {ErrorMessage} from "./ErrorMessage/ErrorMessage"
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';

export class App extends Component {
  state = {
    q: '',
    gallary: [],
    isLoading: false,
    error: null,
    totalHits: 0,
  };

  componentDidMount() {
    if (this.state.gallary.length) {
      this.makeGallary();
    }
  }

  componentDidUpdate(_, prevState) {
    const { q } = this.state;
    if (prevState.q !== q) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { q } = this.state;
    this.setState({ isLoading: true, error: null });
    try {
      const data = await fetchImages(q);
      // console.log(data.hits);
      console.log(this.props)
      this.setState({ gallary: data.hits, totalHits: data.totalHits });
    } catch (error) {
      console.log(error);
      this.setState({
        error:
          'Sorry, there was a negative effect. Please refresh the page.',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  makeGallary = array => {
    console.log(this.state.gallary);
    this.setState({ gallary: array });
  };

   getQuery = searchWord => {
    this.setState({ q: searchWord });
  };

  render() {
    const {isLoading, error, totalHits} = this.state
    return (
      <>
        <Searchbar onSearch={this.getQuery} />
        <ImageGallery gallary={this.state.gallary} />
        {isLoading && <ImageSkeleton />}
        {error && <ErrorMessage error={error}/>}
        {totalHits && <ButtonLoadMore/>}
      </>
    );
  }
}
