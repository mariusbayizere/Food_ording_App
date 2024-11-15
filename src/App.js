import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './components/Heading';
import Body from './components/Body';



const AppLoyout = () =>{
    return <div className='App'>
        <Heading/>
        <Body/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLoyout/>)