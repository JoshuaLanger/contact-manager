import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    post: ''
  };
  componentDidMount() {
    // Executes once component does appear
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  //   componentWillMount() {
  //     // Executes before component appears
  //     console.log('component will mount...');
  //   }
  //   componentDidUpdate() {
  //     // Executes after component changes
  //     console.log('component did update...');
  //   }
  //   componentWillUpdate() {
  //     console.log('component will update');
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
