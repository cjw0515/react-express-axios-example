import React, { Component } from 'react';
import Input from './components/Inputtxt'
import ContentList from './components/ContentList'
import Header from './components/Header'
import axios from 'axios';

class App extends Component {
  state = {
    response: '',
    name:'',
    body:'',
    items:[]
  };

callApi = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

componentWillMount(){
  console.log('components will mount');
}

componentDidMount() {
  this.loadContents();
}

handleClick = () => {
  this.sendContents();
}

handleDelete = (id) => {
  this.deletePost(id);
}

handleUpdate = (id, content) => {
  return this.updatePost(id, content)
}

handleNameChange = (e) => {
  this.setState({
    name: e.target.value
  });
}

handleBodyChange = (e) => {
  this.setState({
    body: e.target.value
  });
}

handleBodyChange = (e) => {
  this.setState({
    body: e.target.value
  });
}

handleBodyChange = (e) => {
  this.setState({
    body: e.target.value
  });
}

sendContents = () => {
  axios.post('/api/content/', {
    name: this.state.name,
    body: this.state.body
  })
  .then(
    response => {
      console.log(response.body);
      this.setState({
        name:'',
        body:''
      })
      this.loadContents();
    }
  )
}

loadContents = () => {
  axios.get('/api/content').then(
    response => {

      const data = response.data;

      this.setState({
        items: data
      })
    }
  )
}

deletePost = (id) => {
  axios.delete('/api/content/' + id).then(
    (response) => {
      //console.log(response);
      this.loadContents();
    }
  )
}

updatePost = (id, content) => {
  return axios.put('/api/content/' + id, {content}).then(
    (response) => {
      console.log(response);
      this.loadContents();
    }
  )
}

  render() {
    const { handleBodyChange, handleNameChange, handleClick, handleDelete, handleUpdate } = this;
    const { name, body, items } = this.state;
    return (
      <div>
        <Header/>
        <Input
          onBodyChange={handleBodyChange}
          onNameChange={handleNameChange}
          nameValue = {name}
          bodyValue = {body}
          onClick={handleClick}
         />
        <ContentList
          items={items}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          />
      </div>
    );
  }
}

export default App;
