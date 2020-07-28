import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.ImageRef.current.clientHeight);
    this.ImageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.ImageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.img;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img alt={description} src={urls.regular} ref={this.ImageRef} />
      </div>
    );
  }
}

export default ImageCard;
