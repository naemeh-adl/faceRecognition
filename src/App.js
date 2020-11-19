import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import './components/Navigation/Navigation'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkInput from './components/ImageLinkInput/ImageLinkInput';
import FaceRecognitionArea from './components/FaceRecognitionArea/FaceRecognitionArea';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const particlesParam={
particles:{
  number:{
    value:45,
    density:{
      enable:true,
      value_area:300
    }
  }
},
"interactivity": {
  "events": {
      "onhover": {
          "enable": true,
          "mode": "repulse"
      }
  }
}
};
const initialState={
  inputText:'',
  imageUrl:'',
  box:{},
  route:'Signin',
  isSignedIn:false,
  user:{
      id:'',
      name:'',
      email:'',
      password:'',
      entries:0,
      joined:''
  }
};
class App extends Component {
 
  constructor(){
    super();
    this.state = initialState;
  }
  onRouteChange=(route)=>{
    if(route==='Signout'){
      this.setState(initialState);
    }else if(route==='home'){
      this.setState({isSignedIn:true});
    }
    this.setState({route:route})
  }
  loadUser=(data)=>{
    debugger;
    this.setState({user:
      {
      id:data.id,
      name:data.name,
      email:data.email,
      password:data.password,
      entries:data.entries,
      joined:data.joined 
    }});
  }
  onInputChange=(event)=>{
    this.setState({inputText:event.target.value});
  }
  calculateBox=(data)=>{
    debugger;
    const myBox=data.outputs[0].data.regions[0].region_info.bounding_box;
    const Img=document.getElementById('currentImage');
    const ImgWidth=Number(Img.width);
    const ImgHeight=Number(Img.height);
    return({
      left_col: myBox.left_col * ImgWidth,
      right_col : ImgWidth - myBox.right_col * ImgWidth,
      top_row : ImgHeight * myBox.top_row,
      botton_row : ImgHeight- ImgHeight* myBox.bottom_row
        });
  }
  displayBox=(data)=>{
    debugger;
    this.setState({box:data})
  }
  
  onButtonClicked=()=>{
    debugger;
    //Naee
   // this.setState({imageUrl:this.state.inputText});
   this.setState({imageUrl:this.state.inputText});
   fetch('https://glacial-dusk-38101.herokuapp.com/imageUrl',
   {
   method:'post',
   headers:{'Content-Type':'application/json'},
   body: JSON.stringify({
     url:this.state.inputText
   })
   
}).then(response=>response.json())
    .then(
    response=> {
      if(response){
        debugger;
        fetch('https://glacial-dusk-38101.herokuapp.com/image',
          {
          method:'put',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            id:this.state.user.id
          })
          
    })
        .then(response=>response.json())
        .then(count=>{
          console.log(count);
          this.setState(Object.assign(this.state.user,{entries:count}));    
        }
      )
      .catch(console.log);
    }
      this.displayBox(this.calculateBox(response));
      
    })
    .catch(err=> console.log('Error',err));
    }
    //Naee
  render(){
   // console.log(this.state.user);
  return (
    <div className="App">
      
       <Particles className="particles"
                params={
                 particlesParam   
                } />
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
      {
        this.state.route==='home'?
          <div>
            <Logo/>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkInput onInputChange={this.onInputChange} onButtonClicked={this.onButtonClicked}/>
            <FaceRecognitionArea imageUrl={this.state.imageUrl} box={this.state.box}/>
          </div>
          :(
            this.state.route==='Signin'?
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
  }
    </div>
  );
    }
}

export default App;
