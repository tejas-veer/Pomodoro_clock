import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bg from "./bg.mp4";

class App1 extends React.Component {

  constructor(property) {
    super(property);
    this.loop = undefined;
  }

  state = {
    bcount: 10,
    scount: 45,
    currentState: 'Session',
    currentTime: 45 * 60,
    isPlaying: false,
    loop: undefined
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  decreaseBreak = () => {
    const { bcount, currentState, currentTime, isPlaying } = this.state;

    if (bcount > 0) {
      if (isPlaying == false && currentState == 'Break') {
        this.setState({
          bcount: bcount - 1,
          currentTime: (bcount - 1) * 60
        })
      }
      else {
        this.setState({
          bcount: bcount - 1
        })
      }
    }

  }

  increaseBreak = () => {
    const { bcount, currentState, currentTime, isPlaying } = this.state;
    if (bcount <= 59) {
      if (isPlaying == false && currentState == 'Break') {
        this.setState({
          bcount: bcount + 1,
          currentTime: (bcount + 1) * 60
        })
      }
      else {
        this.setState({
          bcount: bcount + 1,
        })
      }

    }
  }

  decreaseSession = () => {
    const { scount, currentState, currentTime, isPlaying } = this.state;
    if (scount > 0) {
      if (isPlaying == false && currentState == 'Session') {
        this.setState({
          scount: scount - 1,
          currentTime: (scount - 1) * 60
        })
      }
      else {
        this.setState({
          scount: scount - 1
        })
      }
    }
  }

  increasSession = () => {
    const { scount, currentState, currentTime, isPlaying } = this.state;
    if (scount <= 59) {
      if (isPlaying == false && currentState == 'Session') {
        this.setState({
          scount: scount + 1,
          currentTime: (scount + 1) * 60
        })
      }
      else {
        this.setState({
          scount: scount + 1
        })
      }

    }
  }

  start = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      document.body.style.backgroundColor = 'red'
      clearInterval(this.loop);
      this.setState({
        isPlaying: false
      })
    }
    else {
      this.setState({
        isPlaying: true
      })
      document.body.style.backgroundColor = 'green'
      this.loop = setInterval(() => {
        const { currentTime, currentState, bcount, scount } = this.state;
        if (currentTime <= 0) {
          this.setState({
            currentState: (currentState == 'Session') ? 'Break' : 'Session',
            currentTime: (currentState == 'Session') ? bcount * 60 : scount * 60
          })
        }
        else {
          this.setState(
            {
              currentTime: currentTime - 1
            }
          )
        }
      }, 1000);
    }

  }

  changeSession = () => {
    const { currentState, currentTime, scount, bcount, isPlaying, loop } = this.state;

    clearInterval(this.loop);
    this.setState({
      currentState: (currentState == 'Session') ? 'Break' : 'Session',
      currentTime: (currentState == 'Session') ? bcount * 60 : scount * 60,
      isPlaying: false
    })
  }

  reset = () => {
    const { currentState, currentTime, scount, bcount, isPlaying, loop } = this.state;
    document.body.style.backgroundColor = '#ff4757'
    clearInterval(this.loop);
    this.setState({
      currentState: 'Session',
      currentTime: scount * 60,
      // currentState: (currentState === 'Session') ? 'Session' : 'Break',
      // currentTime: (currentState === 'Session') ? scount * 60 : bcount * 60,
      isPlaying: false
    })
  }

  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return `${minutes}:${seconds}`;
  }

  startORstop = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      return 'Stop'
    }
    else {
      return 'Start'
    }
  }

  changeSessionName = () => {
    const { currentState } = this.state;
    return (currentState == 'Session') ? 'Switch To Break' : 'Switch To Session'
  }





  render() {
    const { bcount,
      scount,
      currentState,
      currentTime
    } = this.state;
    const propertyBreak = {
      title: 'Break Time',
      count: bcount,
      decrease: this.decreaseBreak,
      increase: this.increaseBreak
    }
    const propertySession = {
      title: 'Pomodoro Time',
      count: scount,
      decrease: this.decreaseSession,
      increase: this.increasSession
    }

    return (
      <div className="pomodoro-container">
        <video autoPlay
          loop
          muted
          id="myVideo">
          <source src={bg} type="video/mp4" />
        </video>
        {/* <nav id="navbar"><span><img src="https://cdn.pixabay.com/photo/2017/11/10/13/32/clock-2936333_1280.png"></img></span>Focus Clock</nav> */}
        <div className="clock-container" >
          <h1>{currentState}</h1>
          <span>{this.convertToTime(currentTime)}</span>
        </div>
        <div className="clock-btn ">
          <button onClick={this.start} >{this.startORstop()}</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <button id='chg-btn' className="flex" onClick={this.changeSession} >{this.changeSessionName()}</button>
        <div className="action-container ">
          <SetTimer {...propertyBreak} />
          <SetTimer {...propertySession} />
        </div>
      </div>
    )
  }
}


const SetTimer = (property) => (
  <div className='timer-container'>
    <h1>{property.title}</h1>
    <div className="action-btn">
      <button onClick={property.decrease}>-</button>
      <span>{property.count}</span>
      <button onClick={property.increase}>+</button>
    </div>
  </div>
)
ReactDOM.render(
  <App1 />,
  document.getElementById('root')
);


