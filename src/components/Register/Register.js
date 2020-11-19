
import React from 'react';

class Register extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''
        }
    }
    onEmailChanged= (event)=>{
        this.setState({email:event.target.value});
    }
    onPasswordChanged=(event)=>{
        this.setState({password:event.target.value});
    }
    onNameChanged=(event)=>{
        this.setState({name:event.target.value});
    }
    onSubmitClicked2=()=>{
        fetch('https://glacial-dusk-38101.herokuapp.com/register',{method:'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            email:this.state.email,
            password:this.state.password,
            name:this.state.name
        })
        
    })
    .then(response=>response.json())
    .then(user=>{
        if(user.id){
            this.props.loadUser(user);
            this.props.onRouteChange('home');
    }});
      
    }
    render(){
       // const {onRouteChange}=this.props;
        return(
            <div>
                <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text" name="name"  id="name"
                                onChange={this.onNameChanged}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email" name="email-address"  id="email-address"
                                onChange={this.onEmailChanged}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password" name="password"  id="password"
                                onChange={this.onPasswordChanged}/>
                            </div>
                            </fieldset>
                            <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit" value="Register" onClick={this.onSubmitClicked2}/>
                            </div>
                        </div>
                        </main>
                </article>
            </div>
        );
}
}
export default Register;