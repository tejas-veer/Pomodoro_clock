(this.webpackJsonppomodoro_clock=this.webpackJsonppomodoro_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n(4),r=n(5),i=n(8),o=n(7),a=n(1),u=n.n(a),l=n(6),d=n.n(l),b=(n(13),n.p,n(14),n(0));var m=n.p+"static/media/bg.fc2603bc.mp4",j=n.p+"static/media/click.2604a56c.wav",S=n.p+"static/media/buzzer.7ba9fbe4.wav",h=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={bcount:10,scount:45,currentState:"Session",currentTime:2700,isPlaying:!1,loop:void 0,isBuzz:!1},c.decreaseBreak=function(){var e=c.state,t=e.bcount,n=e.currentState,s=(e.currentTime,e.isPlaying);t>0&&(0==s&&"Break"==n?c.setState({bcount:t-1,currentTime:60*(t-1)}):c.setState({bcount:t-1}))},c.increaseBreak=function(){var e=c.state,t=e.bcount,n=e.currentState,s=(e.currentTime,e.isPlaying);t<=59&&(0==s&&"Break"==n?c.setState({bcount:t+1,currentTime:60*(t+1)}):c.setState({bcount:t+1}))},c.decreaseSession=function(){var e=c.state,t=e.scount,n=e.currentState,s=(e.currentTime,e.isPlaying);t>0&&(0==s&&"Session"==n?c.setState({scount:t-1,currentTime:60*(t-1)}):c.setState({scount:t-1}))},c.increasSession=function(){var e=c.state,t=e.scount,n=e.currentState,s=(e.currentTime,e.isPlaying);t<=59&&(0==s&&"Session"==n?c.setState({scount:t+1,currentTime:60*(t+1)}):c.setState({scount:t+1}))},c.start=function(){var e=c.state.isPlaying;document.getElementsByClassName("clickAudio")[0].play();var t=document.getElementById("myVideo");t.paused?t.play():t.pause(),e?(document.body.style.backgroundColor="red",clearInterval(c.loop),c.setState({isPlaying:!1})):(c.setState({isPlaying:!0}),document.body.style.backgroundColor="green",c.loop=setInterval((function(){var e=c.state,t=e.currentTime,n=e.currentState,s=e.bcount,r=e.scount;document.getElementsByClassName("buzzAudio")[0];t<=0?c.setState({currentState:"Session"==n?"Break":"Session",currentTime:"Session"==n?60*s:60*r}):c.setState({currentTime:t-1})}),1e3))},c.changeSession=function(){var e=c.state,t=e.currentState,n=(e.currentTime,e.scount),s=e.bcount;e.isPlaying,e.loop;document.getElementById("myVideo").pause(),clearInterval(c.loop),c.setState({currentState:"Session"==t?"Break":"Session",currentTime:"Session"==t?60*s:60*n,isPlaying:!1})},c.reset=function(){var e=c.state,t=(e.currentState,e.currentTime,e.scount);e.bcount,e.isPlaying,e.loop;document.getElementById("myVideo").pause(),document.body.style.backgroundColor="#ff4757",clearInterval(c.loop),c.setState({currentState:"Session",currentTime:60*t,isPlaying:!1})},c.convertToTime=function(e){var t=Math.floor(e/60),n=e%60;return n<10&&(n="0"+n),t<10&&(t="0"+t),"".concat(t,":").concat(n)},c.startORstop=function(){return c.state.isPlaying?"Stop":"Start"},c.changeSessionName=function(){return"Session"==c.state.currentState?"Switch To Break":"Switch To Session"},c.loop=void 0,c}return Object(r.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.loop)}},{key:"render",value:function(){var e=this.state,t=e.bcount,n=e.scount,s=e.currentState,r=e.currentTime,i={title:"Break Time",count:t,decrease:this.decreaseBreak,increase:this.increaseBreak},o={title:"Pomodoro Time",count:n,decrease:this.decreaseSession,increase:this.increasSession};return Object(b.jsxs)("div",{className:"pomodoro-container",children:[Object(b.jsx)(v,{}),Object(b.jsxs)("div",{className:"clock-container",style:{border:"Session"==this.state.currentState?"5px solid white":"5px solid red"},children:[Object(b.jsx)("h1",{children:s}),Object(b.jsx)("span",{children:this.convertToTime(r)})]}),Object(b.jsxs)("div",{className:"clock-btn ",children:[Object(b.jsx)("button",{onClick:this.start,children:this.startORstop()}),Object(b.jsx)("button",{onClick:this.reset,children:"Reset"})]}),Object(b.jsx)("button",{id:"chg-btn",className:"flex",onClick:this.changeSession,children:this.changeSessionName()}),Object(b.jsxs)("div",{className:"action-container ",children:[Object(b.jsx)(p,Object(c.a)({},i)),Object(b.jsx)(p,Object(c.a)({},o))]})]})}}]),n}(u.a.Component),p=function(e){return Object(b.jsxs)("div",{className:"timer-container",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsxs)("div",{className:"action-btn",children:[Object(b.jsx)("button",{onClick:e.decrease,children:"-"}),Object(b.jsx)("span",{children:e.count}),Object(b.jsx)("button",{onClick:e.increase,children:"+"})]})]})},v=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("audio",{className:"clickAudio",children:Object(b.jsx)("source",{src:j})}),Object(b.jsx)("audio",{className:"buzzAudio",children:Object(b.jsx)("source",{src:S})}),Object(b.jsx)("video",{loop:!0,muted:!0,id:"myVideo",children:Object(b.jsx)("source",{src:m,type:"video/mp4"})})]})};d.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.18a5b4ef.chunk.js.map