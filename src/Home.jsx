import React from 'react';

function Home() {
   
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            textAlign: 'center'
          };
          const width ={
              width:'100%',
                height:'70vh'
          }
          return (
<>
        
        <h1 style={mystyle}>WELCOME TO HOME PAGE</h1>

     
           <img src="https://wallpaperbat.com/img/224340-home-screen-wallpaper.jpg" style={width}/>       
</>


           );
  }
  
  export default Home;