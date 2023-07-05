import { useState } from 'react';
import Notification from './Notification';
import './App.css';
import mark from '../images/avatar-mark-webber.webp';
import angela from '../images/avatar-angela-gray.webp';
import jacob from '../images/avatar-jacob-thompson.webp';
import rizky from '../images/avatar-rizky-hasanuddin.webp';
import kimberly from '../images/avatar-kimberly-smith.webp';
import nathan from '../images/avatar-nathan-peterson.webp';
import anna from '../images/avatar-anna-kim.webp';

const App = ()=>{
  //const unread = 'unread';
  const [read,setRead] = useState(3);
  const [notRead, setNotRead] = useState({
    div: 'unread',
    text: true
  });
  
  const setReadFunc = ()=>{
    setRead(0);
    setNotRead({
      div: 'read',
      text: false
    })
  }
  return (
  <>
  <header>
  <h3>Notification</h3>
  <p className='counter'><span id='count'>{read}</span></p>
  <p className='mark' onClick={setReadFunc}>Mark all as read</p>
  </header>
  
  <div className='notifications'>
  <Notification src={mark} name='Mark Webber' time='1m ago' text='reacted to your recent post' bold='My first tournament today!' divClass={notRead.div} textRead={notRead.text}/>
  
  <Notification src={angela} name='Angela Gray' time='5m ago' text='followed you' divClass={notRead.div} textRead={notRead.text} />

  <Notification src={jacob} name='Jacob Thompson' time='1 day ago' text='has joined your group' bold='Chess Club' divClass={notRead.div} textRead={notRead.text} />
  
  <Notification src={rizky} name='Rizky Hasanuddin' time='5 days ago' text='sent you a private message' />
  
  <Notification src={kimberly} name='Kimberly Smith' time='1 week ago' text='commented on your picture' />
  
  <Notification src={nathan} name='Nathan Peterson' time='2 weeks ago' text='reacted to your recent post 5' bold='end-game strategies to increase your win rate' />
  
  <Notification src={anna} name='Anna Kim' time='2 weeks ago' text='left the group' bold='Chess Club' />
  </div>
  </>
  )
}

export default App;