import { IonCol,IonIcon } from "@ionic/react";
import styles from "./Button.module.css";
import {backspace} from 'ionicons/icons'
const Button = props => {

    const { value, special, clickEvent,drawer } = props;
    
    return (
        <IonCol className={ `${ special ? styles.specialButton :special == undefined?styles.m_button: styles.button } animate__animated animate__faster` } onClick={ e =>{
            if(value == "M↓") {
                drawer()
            }else{
                clickEvent(e, value)
            }
            
            } }>
            { value === "/" ? <>&divide;</> : value === "*" ? <>&times;</> : value == "remove"?<IonIcon icon={backspace} color="white"></IonIcon>:<h10 style={{color:'white'}}>{value}</h10>}
           
        </IonCol>
    );
}

export default Button;