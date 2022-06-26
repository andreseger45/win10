import React from 'react'
import { IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonMenuButton, IonRow, IonCol,useIonViewWillEnter,IonItem,isPlatform  } from '@ionic/react';
import { Storage } from '@capacitor/storage';
import styles from "./Home.module.css";

export default class extends React.Component{
    state = {
        data:[]
    }
    getData = async()=>{
        if(isPlatform("android")){
            let storage = await Storage.get({key:"history"})
            const parse = JSON.parse(storage.value)
            console.log(parse)
            this.setState({data:parse})
        }else{
            let storage = window.localStorage.getItem("history")
            const parse = JSON.parse(storage)
            console.log(parse)
            this.setState({data:parse})
        }
       

    }
    componentDidMount(){
        // window.localStorage.getItem("history")
        this.getData()

    }
    render(){
        console.log(this.state.data)

        return (
        <IonPage style={{backgroundColor:"black"}}>
        <IonHeader style={{backgroundColor:"black",display:'flex',flexDirection:'row'}}>
        <IonMenuButton  className='ionMenuButton'/>

            <h3 style={{color:'white',marginLeft:5}}>History</h3>

        </IonHeader>
        <IonContent style={{backgroundColor:"black"}} fullscreen>

        <div className={ styles.sumContainer }>


        {this.state.data?this.state.data.slice(this.state.data.length -10).map((i,index)=>{
            return <div key={index} style={{width:'100%',padding:10,background:'gray',borderRadius:0,marginTop:10,}}>
             <h4 style={{color:'white'}}>{i.expration}</h4>
             <h4 style={{color:'white'}}>{i.result}</h4>

            </div>
        }):<h1 style={{textAlign:'center',color:"white"}}>You Dont Have Any History Yet</h1>}
       
        </div>
            </IonContent>
    </IonPage>
        )
    }
}