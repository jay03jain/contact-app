import React from 'react';
import './addContact.css'

class AddContact extends React.Component {
  state={
    name:"",
    email:"",
  }
  add=(e)=>{
    e.preventDefault();
    if(this.state.name==='' || this.state.email===''){
      alert("Please enter all the feilds");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""})
    this.props.history.push("/")
  }
  render() {
  return (
    <div className='ui main' style={{paddingTop: '80px',marginBottom:'7px !Important'}}>
      <h2>AddContact</h2>
      <form className=' ui form' onSubmit={this.add}>
        <div className='field'>
          <label>Name</label>
          <input type="text" name='name' placeholder='name' 
          value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" 
          name='email' 
          placeholder='Email'
          value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}></input>
        </div>
        <button className='ui button blue' >Add</button>
      </form>
    
    
    </div>
  )
}
}

export default AddContact;
