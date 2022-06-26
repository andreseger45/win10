import { Link, Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,IonToolbar,IonTitle,IonMenu,IonHeader,IonContent,IonList } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

import { useEffect,useState,useRef } from 'react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import History from './pages/History';
import About from './pages/About';

import './theme/sidemenu.css'





setupIonicReact();


const App: React.FC = () => {
  
  

  return <IonApp>
      <IonReactRouter>

      <IonMenu contentId="main">
        <div  className='IonMenu'>

        <IonHeader className='ionHeader'>
                <IonToolbar className='iontoolbar'>
                    <IonTitle className='ionTitle'>
                        Settings
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ionContent'>
              <Link to="/about">
                <IonList className="ionList" style={{marginTop:20}}>
                  <p style={{color:"white",marginLeft:5}}>About</p>
                </IonList>
              </Link>

            </IonContent>
       
        </div>
          
        </IonMenu>
   
      
      <IonRouterOutlet id="main">
        
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>


        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      
    
      </IonReactRouter>
   
  </IonApp>
}

export default App;
