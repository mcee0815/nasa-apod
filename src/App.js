import React, { Component } from 'react';
import './App.css';
import Logo from  './logo.png';
import GitHub from './GitHub-Mark.png'
import Info from  './info';
import Explanation from  './explanation';
import  Media  from './media';
import  Social2  from './social2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

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
      return <img style={{width:'100%',borderRadius:'5px'}} alt="foo" src={hdurl} />
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
          <button onClick={this.toggleTheme} className='themeToggle' >
          {this.state.theme === 'dark' ? 'Light':'Dark'} {<FontAwesomeIcon icon={faLightbulb} size='lg' />}
          </button>
  
          <div className='headings'>
              <h1 className='topHeading'>Picture Of The Day</h1>
              <h2 className='subHeading'>Courtesy Of 
              <span>
                <img className='logo' src={Logo} alt="logo"  />
              </span>
              </h2>
          </div>
          <Info  title={title} date={date} />
          
          <div className="i-frame"><Media media={this.getMedia()} /></div>
            <Explanation 
              theText={this.state.more ? explanation && explanation.substr(0,160) : explanation}
              btnText={this.state.more ? '...read more' :'less'} 
              onClick={this.readMoreToggle.bind(this)} /> 

              
        </div>
      </div>
    );
  }
}
export default App;
