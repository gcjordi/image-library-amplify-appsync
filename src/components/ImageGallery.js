import React, { Component } from "react";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: null,
    };
  }

  handleChange = (e) => {
    console.log(e.target);
  };

  render() {
    console.log(this.props.images);
    return (
      <React.Fragment>
        <div className="container">
          {this.props.images.map((image) => (
            <div
              key={image.id}
              className="img-container border border-primary rounded p-3 m-3"
            >
              <button
                type="button"
                className="delete-btn"
                onClick={(event) => {
                  this.props.deleteImage(image.id);
                }}
              >
                &times;
              </button>

              <img src={image.src} alt="Smiley face" width="300" />
              <div>{image.labels.join(", ")}</div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ImageGallery;
