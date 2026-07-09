import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import C from './Class.jsx'
import Parent from './Parent.jsx'
import App from './ParentCode.jsx'
import Event from './Event.jsx'
import App1 from './Products.jsx'
import Counter from './StateDemo.jsx'
import Text from './StateText.jsx'
import Color from './StateColor.jsx'
import Up from './Mouseup.jsx'
import App2 from './EventHandler.jsx'
import App3 from './EventHandler1.jsx'
import LogIn from './CR.jsx'
import Ter from './Ternary.jsx'
import Ter1 from './Ternary1.jsx'
import RH from './ReactHooks.jsx'
import Ef from './Effect.jsx'
import Ef1 from './Effect1.jsx'
import ReactHooks1 from './ReactHooks1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <C />
    <Parent />
    <App />
    <App1 />
    <Event />
    <Counter />
    <Text />
    <Color />
    <Up />
    <App2 />
    <App3 />
    <LogIn />
    <Ter />
    <Ter1 />
    <RH />
    <Ef />
    <Ef1 />
    <ReactHooks1 />
  </StrictMode>,
)
