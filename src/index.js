import React from 'react';
import ReactDOM from 'react-dom/client';
import image from './images/dog1.jpg';
import image1 from './images/dog2.jpg';

import image2 from './images/dog3.jpg';
import image3 from './images/dog4.jpg';
import image4 from './images/dog5.jpg';
import image5 from './images/dog6.jpg';
import search from './images/dog7.jpg';

import star from './images/star.png';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const dogs = [
  {
    photo: image,
    
    dog_desc:"Brown Dog"
   
  },
  {
    photo: image5,
    
    dog_desc:"Black Dog 2"
  },
  {
    photo: image2,
    dog_desc:"Gray Dog 3"
  },
  {
    photo: image3,
    dog_desc:"White Fur Dog"
  },
  {
    photo: image4,
    dog_desc:"Black Eyed Dog"
  },
  {
    photo: image,
    dog_desc:"Black Eyed Dog"
  },
  {
    photo: image5,
    dog_desc:"White Fur Dog"
  },
  {
    photo: search,
    dog_desc:"Black Eyed Dog"
  },
  {
    photo: image1,
    dog_desc:"Black Eyed Dog"
  },
  {
    photo: image3,
    dog_desc:"Brown Eyed Dog"
  },
  {
   photo: image5,
    dog_desc:"Purple Eyed Dog"
  },
  {
    photo: search,
    dog_desc:"Yellow Eyed Dog"
  },
  {
    photo: image1,
    dog_desc:"Black Eyed Dog"
  },
  {
    photo: image3,
    dog_desc:"Brown Eyed Dog"
  },
  {
   photo: image5,
    dog_desc:"Purple Eyed Dog"
  },
  {
    photo: search,
    dog_desc:"Yellow Eyed Dog"
  }

  
]
// function Gallery(props){
//     return(
//   <div className ="container">
     
     
//       <div className="user">
//       <div className='user_section_one'>
//       <img src= {props.photo}></img>
//         <div className='user_details'>
//         <h3>{props.userName}</h3>
//         <p>{props.message}</p>
//         </div>
//       </div>
//       <div className="user_star">
//         <p>{props.time}</p>
//       <img  src= {star}></img>
//       </div>
//       </div>
   
//   //   </div>
//   //   )
  // }
  
  // root.render(
  //   <div>
  //     <Search></Search>
  //     {
  //       user.map(function(item,index)
  //       {
  //           return <Chat userName ={item.userName} message={item.message} photo={item.photo} time={item.time}></Chat>
        
  //       }       )
  //     }
  //   </div>
  // )







// 

function Gallery(props){
  return(
   
      <div className ="image_grid">
   <img src={props.photo}></img>
   <p>{props.dog_desc}</p>

   </div>

 
  )
}

root.render(
 
   <div className='container'><h1>Image Gallery</h1>
   
     {
        dogs.map(function(item,index)
        {
            return <Gallery photo ={item.photo} dog_desc={item.dog_desc} time={item.time}></Gallery>
        
        }       )
      }
    </div>
  
)