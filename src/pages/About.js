import React from 'react'
import { IonPage,IonHeader,IonContent, IonMenuButton } from '@ionic/react'
import styles from "./Home.module.css";

export default class About extends React.Component{
    render(){
        return(
            <IonPage style={{backgroundColor:"black"}}>
        <IonHeader  style={{backgroundColor:"black",display:'flex',flexDirection:'row'}}>
            <IonMenuButton className='ionMenuButton'/>
        <h3 style={{color:'white',marginLeft:5}}>About</h3>
            
        </IonHeader>
        <IonContent style={{backgroundColor:"black"}} fullscreen>
        <div style={{backgroundColor:'black',display:'flex',height:'100%',flexDirection:'column',}}>
            
           <p style={{color:"white",fontSize:18,marginLeft:60,marginTop:50,fontWeight:'bold'}}>Autores: </p>
           <p style={{color:"white",fontSize:18,marginLeft:60}}>Andres Eger Hector Funes</p>


           <p style={{color:"white",fontSize:18,marginLeft:60,fontWeight:'bold'}}>Clase: </p>
           <p style={{color:"white",fontSize:18,marginLeft:60}}>Experiencia de Usuario</p>

           <p style={{color:"white",fontSize:18,marginLeft:60,fontWeight:'bold'}}>Fecha: </p>
           <p style={{color:"white",fontSize:18,marginLeft:60}}>27/07/2022</p>

        </div>
        </IonContent>
            </IonPage>

        )
    }
}