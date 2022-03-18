import React, { Component } from "react";


class Addcontact extends Component{
    state = {
        name:"",
        email:"",
    };

    adde = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            console.log("empty");
            return 
        }
        
        this.props.Addcontacthandler(this.state);
        this.setState({
            name: "",
            email:""
        })
        
    }
    
    render() {
        
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className="ui form"  onSubmit={this.adde}>
                    <div className="feild">
                        <label >Name</label>
                        <input name="name"
                            value={this.state.name}
                            placeholder="Name"
                            type="text"
                            onChange={(e) => this.setState({ name: e.target.value} ) } />
                    </div>
                    <div className="feild">
                        <label >Email</label>
                        <input name="email"
                            placeholder="email"
                            type="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email : e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            
          </div>  
        );
    }
}
export default Addcontact;