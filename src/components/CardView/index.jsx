import React, { Component } from "react";
import { Card, Image, Label } from "semantic-ui-react";
import Modal from "../MovieModal/index";
class CardView extends Component {
  //image
  //title
  //meta
  //description
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleOnClick = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  onCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  render() {
    return (
      <Card>
        <Image wrapped onClick={this.handleOnClick} src={this.props.image} />
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.meta}</span>
          </Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Label className="ui yellow" as="a">
              {this.props.label}
            </Label>
          </a>
        </Card.Content>
        <Modal
          description={this.props.description}
          title={this.props.title}
          movieUrl={this.props.movieUrl}
          isOpen={this.state.isModalOpen}
          onCloseModal={this.onCloseModal}
        />
      </Card>
    );
  }
}
export default CardView;
