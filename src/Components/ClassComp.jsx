import { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: 'Sign Up Page',
    };
  }
  componentDidMount = () => {
    this.setState({
      pageTitle: 'Sign Up Page',
    });
  };
  componentDidUpdate = () => {
    console.log('component did updated');
  };

  render = () => {
    return (
      <>
        <h1>{this.state.pageTitle}</h1>
      </>
    );
  };
}

export default SignUp;
