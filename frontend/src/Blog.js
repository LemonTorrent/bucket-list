import React, { Component } from "react";
import BlogModal from "./components/BlogModal";
import axios from "axios";
import Cookies from 'js-cookie';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      blogPosts: [],
      modal: false,
      activeItem: {
        title: "",
        date: null,
        description: "",
      },
      csrftoken : Cookies.get('csrftoken'),
    };
  
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/blogs/")
      .then((res) => this.setState({ blogPosts: res.data }))
      .then(() => console.log("Found data", this.state.blogPosts))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    // var csrftoken = window.Cookies.get('csrftoken');

    if (item.id) {
      axios
        .put(`/api/blogs/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/blogs/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/blogs/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  checkOff = (item) => {
    console.log("Clicked ", item)
    item.completed = !item.completed
    this.setState({ activeItem: item, });
    console.log("Afterwards: ", item)

    axios
        .put(`/api/blogs/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
  };

  renderItems = () => {
    return this.state.blogPosts.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <div className="list-blog-cards">
            <div className="first-row">
                <span
                className={`blog-title mr-2`}
                title={item.description}
                >
                {item.title}
                </span>
                <span>
                <button
                    className="btn btn-secondary mr-2"
                    onClick={() => this.editItem(item)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(item)}
                >
                    Delete
                </button>
                </span>
            </div>
            <p>{item.description}</p>
        </div>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-uppercase text-center my-4">Bucket List Blog</h1>
        <div className="content-box row max-w-full">
          <div className="p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary btn-primary-blog"
                  onClick={this.createItem}
                >
                  Add Post
                </button>
              </div>
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <BlogModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default Blog;