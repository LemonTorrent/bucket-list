import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Bucket List Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="blog-title">Title</Label>
              <Input
                type="text"
                id="blog-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter item title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="blog-date">Title</Label>
              <Input
                type="date"
                id="blog-date"
                name="date"
                value={this.state.activeItem.date}
                onChange={this.handleChange}
                placeholder="Enter item date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="blog-description">Description</Label>
              <Input
                type="text"
                id="blog-description"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter item description"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}