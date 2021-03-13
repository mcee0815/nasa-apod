import React, { Component } from 'react';
import './App.css';
import Logo from  './logo.png';
import Info from  './info';
import Explanation from  './explanation';
import  Media  from './media';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData:{},
      more:true,
      theme:'dark',
      typo:'dark'
    };
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  async componentDidMount() {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=VfjVfU5gqOithCSrIJjz8a4xde96DzEpBp6WyKqv'
    this.setState({
      myData:await this.getData(url)
    })
    console.log(this.state.myData)
  }
  getMedia() {
    const {url,hdurl,media_type} = this.state.myData
    
    if (media_type === 'video') {
      return <iframe src={url} title='media' width="100%" height="450"></iframe>
    } else if (media_type === 'image') {
      return <img style={{width:'100%'}} alt="foo" src={hdurl} />
    } else {
      return 'no media'
    }
  }
  toggleTheme() {
    let theme = this.state.theme === 'dark' ? 'light' : 'dark'
    let typo = this.state.typo === 'dark' ? 'light' : 'dark'
    this.setState({
      theme:theme,
      typo:typo
    })
  }

  async getData(url) {
    try {
        let data = await fetch(url)
        return  data.json()
    } 
    catch (error) {
      console.log(error)
    } 
  }
  
  readMoreToggle(){
    this.setState({
      more:!this.state.more
    })
  }

  onSearchSubmit = event => {
    event.preventDefault();
  };

   render() {
   const {explanation,title,date,} = this.state.myData;
    return (
      <div className={`${this.state.theme}-theme-bg`}>
      <div className='container' >
      <button onClick={this.toggleTheme}>Dark-Theme</button>
      <div style={{display:'flex',flexDirection:'column',textAlign:'center',}}>
          <h1  style={{fontWeight:'bold',fontSize:'3.1em',marginBottom:'5px'}}>Picture Of The Day</h1>
          <h2 style={{marginTop:'0',}}>Courtesy Of <span><img style={{width:'40px',verticalAlign:'bottom'}} src={Logo} alt="logo"  /></span></h2>
      </div>
        
        <Info  title={title} date={date} />
        <div className="i-frame"><Media media={this.getMedia()} /></div>
        <Explanation 
          theText={this.state.more ? explanation && explanation.substr(0,160) : explanation}
          btnText={this.state.more ? 'read more' :'less'} 
          onClick={this.readMoreToggle.bind(this)} />  
      </div>
      </div>
      
    );
  }
}
export default App;
