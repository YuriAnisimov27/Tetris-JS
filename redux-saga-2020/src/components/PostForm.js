import React, {Component} from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    const {title} = this.state;

    const newPost = {
      title,
      id: Date.now.toString()
    };

    this.setState({title: ''});

    console.log('new post', newPost);
  };

  changeInputHandler = (e) => {
    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Post Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}/>
        </div>
        <br/>
        <button className='btn btn-success' type='submit'>Create</button>
        <br/>
        <hr/>
      </form>
    );
  }
}
