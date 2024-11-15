import React from 'react'
import ReactDOM from 'react-dom/client'

const Heading = () => {
    return (<div className='heading'>
        <div className='logo-container'>
            <img  className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDel1AZS9c4_plDgTbXgctDeD3MGfAeaifg&s'></img>
        </div>

        <div className='nav-item'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>)
}

const Restorantcart = ({ListData}) =>{
            const {name , location, Rating, Timedelivery, imagesUrl} = ListData;
    return (<div className='res-card'>
        <img className='image_card' alt='this pilau rice' src={imagesUrl}></img>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>{Rating}</h3>
        <h3>{Timedelivery}</h3>

    </div>)
}

const cord_obj = {
    data: [ {
                imagesUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4DWr8XBL10hvNexJGen4IxMr1Lrd3cMUbA&s',
                name: "Meghana Foods",
                location: "Bryan, North Indian, Asian",
                Rating: "4.5 star",
                Timedelivery: "30 minutes"

            },
            {
                imagesUrl: 'https://media.istockphoto.com/id/458531057/photo/bucket-of-kentucky-fried-chicken.jpg?s=612x612&w=0&k=20&c=ml-Y0RSoWqOdzGkr_y7LQL19FIFyCIg9ULNkRPasmLc=',
                name: "KFC",
                location: "Remera, Kigali Rwanda, Africa",
                Rating: "5 star",
                Timedelivery: "16 minutes"

            },
            {
                imagesUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4DWr8XBL10hvNexJGen4IxMr1Lrd3cMUbA&s',
                name: "ComeAgain",
                location: "Remera, Kigali Rwanda, Africa",
                Rating: "3 star",
                Timedelivery: "47 minutes"

            },
            {
                imagesUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR5cByqlq2yPhU5bix7ZO08sDwk4QWRLusQ&s',
                name: "Nyungwe",
                location: "Nyamasheke, Rwanda, Africa",
                Rating: "4.5 star",
                Timedelivery: "33 minutes"

            },
            {
                imagesUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwFEtkpHEGV5bkxF0oFZbb4ABnepSIixLlg&s',
                name: "Simba ",
                location: "Gishishu,Kigali Rwanda, Africa",
                Rating: "6 star",
                Timedelivery: "21 minutes"

            },
            {
                imagesUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwysXdTchf4OUifi-UGDJX1dbqzdoP2ikaw&s',
                name: "Chinise Restoraunt",
                location: "Gishishu,Kigali Rwanda, Africa",
                Rating: "2.4 star",
                Timedelivery: "50 minutes"

            }
        ]
}


const Body = () =>{
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>


            {/* {cord_obj.map(all_object => <Restorantcart ListData={all_object}/>)} */}

            {cord_obj.data.map(all_object => <Restorantcart ListData={all_object}/>)}

{/* 
            <Restorantcart name={cord_obj.name[0]} location={cord_obj.location[0]}/>
            <Restorantcart name={cord_obj.name[1]} location={cord_obj.location[1]}/>
            <Restorantcart name={cord_obj.name[2]} location={cord_obj.location[2]}/>
            <Restorantcart name={cord_obj.name[3]} location={cord_obj.location[3]}/>
            <Restorantcart name={cord_obj.name[4]} location={cord_obj.location[4]}/>
            <Restorantcart name={cord_obj.name[0]} location={cord_obj.location[0]}/> */}
        </div>
        </div>
    )
}



const AppLoyout = () =>{
    return <div className='App'>
        <Heading/>
        <Body/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLoyout/>)