import Restorantcart from "./Restorantcart";
import cord_obj from "../utils/object_data";



const Body = () =>{
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>


            {/* {cord_obj.map(all_object => <Restorantcart ListData={all_object}/>)} */}

            {cord_obj.data.map((all_object, index) => <Restorantcart key={index} ListData={all_object}/>)}

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


export default Body;