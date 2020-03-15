import React, { Component } from "react";
import SearchBar from "./searchbar/SearchBar";
import "./App.css";
import axios from "axios";
import PageLoader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";
// import "basiclightbox/dist/basicLightbox.min.css";
// import * as basicLightbox from "basiclightbox/dist/basicLightbox.min.js";

class App extends Component {
  state = {
    galleryItems: [],
    isLoading: false,
    searchQuery: "",
    error: null,
    largeUrl: "",
    openModal: false,
    page: 1,
    KEY: "15313425-bc0f61e46a051ea2578b0fd6a"
  };

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  handleSubmit = e => {
    e && e.preventDefault();
    this.setState({
      isLoading: true
    });
    const { searchQuery, page, KEY } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data =>
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...data.data.hits]
        }))
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChange = async e => {
    await this.setState({
      searchQuery: e.target.value,
      galleryItems: []
    });
  };

  onLoadMoreClick = async e => {
    await this.setState(prevState => ({ page: prevState.page + 1 }));

    await this.handleSubmit();
  };

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  onImgClick = e => {
    this.setState({
      openModal: true,
      largeUrl: e.target.dataset.origin
    });
  };

  onEscCloseModal = e => {
    if (e.code === "Escape") {
      console.log(e);
      this.setState({
        openModal: false
      });
      window.removeEventListener("keypress", this.onEscCloseModal);
    }
  };

  onOverlayCloseModal =  e => {
    console.log(e.target);
    const focusOnOverlay=e.target.querySelector("img");
    console.log(focusOnOverlay);
    if (focusOnOverlay) {
      this.setState({
        openModal: false
      });
    }
  };

  render() {
    const { isLoading, galleryItems, openModal, largeUrl } = this.state;
    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {isLoading && <PageLoader />}
        <ImageGallery
          galleryItems={galleryItems}
          onImgClick={this.onImgClick}
        />
        <Button onLoadMoreClick={this.onLoadMoreClick} />
        {openModal && (
          <Modal
            path={largeUrl}
            onOverlayCloseModal={this.onOverlayCloseModal}
            onEscCloseModal={this.onEscCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
