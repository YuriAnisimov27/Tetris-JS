import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../redux/actions';

class PostForm extends Component {
  state = {
    title: ''
  };

  submitHandler = (e) => {
    e.preventDefault();

    const {title} = this.state;
    if (!title.trim()) return;
    const newPost = {
      title,
      id: Date.now().toString()
    };

    this.setState({title: ''});
    this.props.createPost(newPost);
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

const mapDispatchToProps = {
  createPost
};

export default connect(null, mapDispatchToProps)(PostForm);
