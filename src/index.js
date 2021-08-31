import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

class App extends React.Component{

  constructor(property){
    super(property);
    this.loop = undefined;
  }

  state = {
   bcount : 5,
   scount  : 25 ,
   currentState : 'Session',
   currentTime : 1*60,
   isPlaying : false,
   loop : undefined
  }

  decreaseBreak = () =>{
    const {bcount,currentState,currentTime,isPlaying} = this.state;

    if(bcount > 0)
    { 
      if(isPlaying == false && currentState == 'Break')
      { 
        this.setState({
          bcount : bcount - 1,
          currentTime : (bcount -1)*60 
        })
      }
      else{ 
        this.setState({
          bcount : bcount - 1
        })
      }
  }
 
  }

  increaseBreak = () =>{
    const {bcount,currentState,currentTime,isPlaying} = this.state;
    if(bcount <= 59)
    { 
      if(isPlaying == false && currentState == 'Break')
      {
        this.setState({
          bcount : bcount + 1,
          currentTime : (bcount + 1)*60 
        })
      }
      else{ 
    this.setState({
      bcount : bcount + 1,
    })
  }
   
  }
  }

  decreaseSession = () =>{
    const {scount,currentState,currentTime,isPlaying} = this.state;
    if(scount > 0){ 
      if(isPlaying == false && currentState == 'Session')
      {      this.setState({
          scount : scount - 1,
          currentTime : (scount - 1)*60
        })
      }
    else{ 
      this.setState({
        scount : scount - 1
      })
  }
  }
  }

  increasSession = () =>{
    const {scount,currentState,currentTime,isPlaying} = this.state;
    if(scount <= 59 )
    { 
      if(isPlaying == false && currentState == 'Session')
      {
        this.setState({
          scount : scount + 1,
          currentTime : (scount + 1)*60
        })
      }
      else{ 
        this.setState({
          scount : scount + 1
        })
      }
   
  }
  }

  start = () => { 
    const {isPlaying} = this.state;

    if(isPlaying)
    {
      clearInterval(this.loop);
      this.setState({
        isPlaying : false
      })
    }
    else{
      this.setState({
        isPlaying : true
      })
      this.loop = setInterval(() => {
        const {currentTime , currentState , bcount , scount} = this.state;
          if(currentTime <= 0)
          {
            this.setState({
              currentState : (currentState == 'Session') ? 'Break' : 'Session',
              currentTime : (currentState == 'Session') ? bcount*60 : scount*60
            })
          }
          else{ 
              this.setState(
                {
                  currentTime : currentTime-1
                }
              )
          }
      },1000);
    }

  } 

  reset = () => {
    const {currentState , currentTime , scount , bcount , isPlaying ,loop} = this.state;

    clearInterval(this.loop);
    this.setState({
      currentState : 'Session',
      currentTime : scount*60  ,  
      isPlaying : false
    })
  }

  convertToTime = (count) =>{
    let minutes = Math.floor(count/60);
    let seconds = count%60;

    if (seconds < 10)
    {
      seconds = '0' + seconds;
    }
    
    if (minutes < 10)
    {
      minutes = '0' + minutes;
    }

    return `${minutes}:${seconds}`;
}
 
  startORstop = () => {
    const {isPlaying} = this.state;
    if(isPlaying)
    {
      return 'Stop'
    }
    else
    {
      return 'Start'
    }
  }
  render()
  {
    const {bcount , 
      scount , 
      currentState , 
      currentTime
    } = this.state;
    const propertyBreak = {
      title : 'Break Time',
      count : bcount,
      decrease : this.decreaseBreak,
      increase : this.increaseBreak
    }
    const propertySession = {
      title : 'Pomodoro Time',
      count : scount,
      decrease : this.decreaseSession,
      increase : this.increasSession
    }

    return(
      
      <div className="pomodoro-container">
         <div className="navbar">
           POMO clock
         </div>
        <div className="cl  ock-container">
          <h1>{currentState}</h1>
          <span>{this.convertToTime(currentTime)}</span>
          <div className="flex "> 
            <button onClick={this.start}>{this.startORstop()}</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      <div className="action-container flex">
        <SetTimer {...propertyBreak}/>
        <SetTimer {...propertySession}/>
      </div>
      </div>
    )
  }
} 
 
const SetTimer = (property) =>(
  <div className='timer-container'>
    <h1>{property.title}</h1>
    <div className="flex action-btn"> 
      <button onClick={property.decrease}>-</button>
      <span>{property.count}</span>
      <button onClick={property.increase}>+</button>
    </div>
  </div>
)
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

