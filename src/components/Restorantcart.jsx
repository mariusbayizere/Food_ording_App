
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

export default Restorantcart