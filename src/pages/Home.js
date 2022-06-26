import { IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonApp,
	
	IonButton,
	IonCard,
	IonMenuButton,
	IonToolbar,
	createGesture,
	IonCardHeader, isPlatform, IonIcon} from '@ionic/react';
import React,{ useEffect, useState,useRef } from 'react';
import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';
import styles from "./Home.module.css";

import { buttons } from "../utils/Buttons";
import { Link } from 'react-router-dom';
import { Storage } from '@capacitor/storage';
import {trash} from 'ionicons/icons'



let all_calculation = []

const Home = () => {
	const drawerRef = useRef();
	const [drawerOpened,setdrawerOpened] = useState(false)
	const [ showTitle, setShowTitle ] = useState("");
	const [ sum, setSum ] = useState("0");
	const [ sumHistory, setSumHistory ] = useState("");
	const [isqual,setIsqueal] = useState(false)
	
	const [data,setData] = useState([])

const	getData = async()=>{
        if(isPlatform("android")){
            let storage = await Storage.get({key:"history"})
            const parse = JSON.parse(storage.value)
            console.log(parse)
            setData(parse)
        }else{
            let storage =await window.localStorage.getItem("history")
            const parse = JSON.parse(storage)
            console.log(parse)
			setData(parse)

        }
       

    }


	const handleClick = async(e, operator) => {
		if(operator == "MC"){
			if(isPlatform("android")){
				 await Storage.remove({key:'history'})

			}else{
				window.localStorage.removeItem("history")
			}
			return false
		}else if(operator == "MR"){
			let storage = ""
			let parse = ""
			if(isPlatform("android")){
				let storage = await Storage.get({key:'history'})
				 parse = JSON.parse(storage.value)
			}else{
				let storage = await window.localStorage.getItem("history")
				parse = JSON.parse(storage)
			}
			setSumHistory(parse[0].expration)
			return false
			
		}else if(operator == "M+"){
			
			if(isPlatform("android")){
				console.log("Android")
				let storage =await Storage.get({key:"history"})
				let s_value = []
				let l_s = []
				l_s.push(JSON.parse(storage.value))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								s_value.push(i)
	
							})
	
						}
	
					
	
				})
				if(sum.toString().length>0){
					s_value[0].result = s_value[0].result+sum
					s_value[0].expration = s_value[0].expration+"+"+sum 
				}else{
					s_value[0].result = s_value[0].result+0
					s_value[0].expration = s_value[0].expration+"+"+0 


				}
				await Storage.set({key:"history",value:JSON.stringify(s_value)})
				return false

			}else{
				let storage = await window.localStorage.getItem("history")
				let s_value = []

				console.log(JSON.parse(storage))
				let l_s = []
				l_s.push(JSON.parse(storage))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								s_value.push(i)
	
							})
	
						}
	
					
	
				})

				if(sum.toString().length>0){
					s_value[0].result = s_value[0].result+sum
					s_value[0].expration = s_value[0].expration+"+"+sum 

				}else{
					s_value[0].result = s_value[0].result+0
					s_value[0].expration = s_value[0].expration+"+"+0 


				}
				window.localStorage.setItem("history",JSON.stringify(s_value))
				return false
			}
			
			
		}else if(operator == "MS"){
		let storage_value = []

				console.log(isPlatform("android"))
			if(isPlatform("android")){
				let storage = await Storage.get({key:'history'})
				console.log(storage.value)
				let l_s = []
				l_s.push(JSON.parse(storage.value))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								storage_value.push(i)
	
							})
	
						}
	
					
	
				})
	
			
			
	
				storage_value.push({
					"id":Math. floor(Math. random() * 100),
					"expration":sumHistory,
					"result":sum
				})
	
				await 	Storage.set({key:'history',value:JSON.stringify(storage_value)})
			}else{
				let storage =await window.localStorage.getItem("history")
				console.log(storage)
				let l_s = []
				l_s.push(JSON.parse(storage))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								storage_value.push(i)
	
							})
	
						}
	
					
	
				})
	
			
			
	
				storage_value.push({
					"id":Math. floor(Math. random() * 100),
					"expration":sumHistory,
					"result":sum
				})
	
				window.localStorage.setItem("history",JSON.stringify(storage_value))
			}
			return false
			
		}else if(operator == "M-"){
			if(isPlatform("android")){
				console.log("Android")
				let storage =await Storage.get({key:"history"})
				let s_value = []
				let l_s = []
				l_s.push(JSON.parse(storage.value))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								s_value.push(i)
	
							})
	
						}
	
					
	
				})
				if(sum.toString().length>0){
					s_value[0].result = s_value[0].result-sum
					s_value[0].expration = s_value[0].expration+"-"+sum 
				}else{
					s_value[0].result = s_value[0].result-0
					s_value[0].expration = s_value[0].expration+"-"+0 


				}
				await Storage.set({key:"history",value:JSON.stringify(s_value)})
				return false

			}else{
				let storage = await window.localStorage.getItem("history")
				let s_value = []

				console.log(JSON.parse(storage))
				let l_s = []
				l_s.push(JSON.parse(storage))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								s_value.push(i)
	
							})
	
						}
	
					
	
				})

				if(sum.toString().length>0){
					s_value[0].result = s_value[0].result-sum
					s_value[0].expration = s_value[0].expration+"-"+sum 

				}else{
					s_value[0].result = s_value[0].result-0
					s_value[0].expration = s_value[0].expration+"-"+0 


				}
				window.localStorage.setItem("history",JSON.stringify(s_value))
				return false
			}
		}


		const tempSumHistory = sumHistory.replace("", "");
		if (operator === "=") {
			
			setIsqueal(true)
			
				calculate();

				let storage_value = []

				console.log(isPlatform("android"))
			if(isPlatform("android")){
				let storage = await Storage.get({key:'history'})
				console.log(storage.value)
				let l_s = []
				l_s.push(JSON.parse(storage.value))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								storage_value.push(i)
	
							})
	
						}
	
					
	
				})
	
			
			
	
				storage_value.push({
					"id":Math. floor(Math. random() * 100),
					"expration":sumHistory,
					"result":sum
				})
	
				await 	Storage.set({key:'history',value:JSON.stringify(storage_value)})
			}else{
				let storage =await window.localStorage.getItem("history")
				console.log(storage)
				let l_s = []
				l_s.push(JSON.parse(storage))
	
				l_s.map(data=>{
						if(data != null){
							data.map(i=>{
								storage_value.push(i)
	
							})
	
						}
	
					
	
				})
	
			
			
	
				storage_value.push({
					"id":Math. floor(Math. random() * 100),
					"expration":sumHistory,
					"result":sum
				})
	
				window.localStorage.setItem("history",JSON.stringify(storage_value))
			}
			return true
		
		
			
			
		} else if (operator === "C") {

			reset();
		} else if (operator === "Del" || operator == "remove") {
			
			backspace();
		}else if(operator == "CE"){
			setSum("")
			setSumHistory("")
		}else if(operator == "2√x"){
			setSumHistory("√("+sumHistory+")")
			setSum(eval(Math.sqrt(sumHistory)).toString().length>6?eval(Math.sqrt(sumHistory)).toFixed(6):eval(Math.sqrt(sumHistory)))

		}else if(operator == "x^2"){
			setSumHistory("sqr("+sumHistory+")")
			setSum(eval(sumHistory*sumHistory).toString().length>6?eval(sumHistory*sumHistory).toFixed(6):eval(sumHistory*sumHistory))

		}else if(operator == "1/​x"){
			setSumHistory("1/"+sumHistory)
			setSum(eval(1/sumHistory).toString().length>6?eval(1/sumHistory).toFixed(6):eval(1/sumHistory))
		} else {
				console.log(operator)
				setIsqueal(false)
				if(operator == "%" && sumHistory.includes("-") || sumHistory.includes("+") || sumHistory.includes("/") || sumHistory.includes("*")){
				console.log("Nothing to do")	
					
					
					
				}else if(operator == "%"){
					setSum(0)
				}
				setSumHistory(tempSumHistory + operator);
	
				e.target.classList.add("animate__headShake");
	
				setTimeout(() => {
					e.target.classList.remove("animate__headShake");
				}, 500);
		
		
		}
	}

	useEffect(() => {
		
		
	
		calculate();
	}, [sumHistory]);

	useEffect(()=>{
	

		let c = drawerRef.current;
		const gesture = createGesture({
		  el: c,
		  gestureName: "my-swipe",
		  direction: "y",
		  /**
		   * when moving, we start to show more of the drawer
		   */
		
		  /**
		   * when the moving is done, based on a specific delta in the movement; in this
		   * case that value is -150, we determing the user wants to open the drawer.
		   *
		   * if not we just reset the drawer state to closed
		   */
		  onEnd: event => {
			c.style.transition = ".5s ease-out";
	
			if (event.deltaY < -30 && c.dataset.open !== "true") {
			  c.style.transform = `translateY(${-350}px) `;
			  c.dataset.open = "true";
			  console.log("in on end");
			}
		  }
		});
	
		// enable the gesture for the item
		gesture.enable(true);
	},[])

	const toggleDrawer = () => {
		getData()
		let c = drawerRef.current;
		if (c.dataset.open === "true") {
		  c.style.transition = ".5s ease-out";
		  c.style.transform = "";
		  c.dataset.open = "false";
		  setdrawerOpened(false)
		} else {
		  c.style.transition = ".5s ease-in";
		  c.style.transform = `translateY(${-350}px) `;
		  c.dataset.open = "true";
		  setdrawerOpened(true)

		}
		console.log(drawerRef)
	  };


	const calculate = () => {

		try {
			// eslint-disable-next-line no-eval


			// console.log(eval(sumHistory))
			// console.log(eval(sumHistory).toString().length)


			setSum(eval(sumHistory).toString().length>6 ? eval(sumHistory).toFixed(6) : eval(sumHistory));
			
			setShowTitle("");
		
			
		} catch (e) {

			console.log(e)
		}
	}

	const reset = () => {

		setSumHistory("");
		setSum("0");
		setShowTitle("");
	}

	const backspace = () => {

		const tempSum = sumHistory.substr(0, sumHistory.length -1);
		setSumHistory(tempSum);
	}

	const deleteHistoryById = async(id)=>{
		if(isPlatform("android")){

			let storage = await Storage.get({key:"history"})
			let s_value = []

			console.log(JSON.parse(storage.value))
			let l_s = []
			l_s.push(JSON.parse(storage.value))

			l_s.map(data=>{
					if(data != null){
						data.map(i=>{
							if(i.id != id){
								s_value.push(i)

							}

						})

					}

				

			})

			
		
		await	Storage.set({key:"history",value:JSON.stringify(s_value)})
		getData()
		
		
		}else{

			let storage = await window.localStorage.getItem("history")
			let s_value = []

			console.log(JSON.parse(storage))
			let l_s = []
			l_s.push(JSON.parse(storage))

			l_s.map(data=>{
					if(data != null){
						data.map(i=>{
							if(i.id != id){
								s_value.push(i)

							}

						})

					}

				

			})

			
			

			 

		
			window.localStorage.setItem("history",JSON.stringify(s_value))
			getData()
		
		}

	}

	return (
		<IonPage style={{backgroundColor:"black"}}>
			<IonHeader style={{backgroundColor:"black",display:'flex',flexDirection:'row'}} >
            <IonMenuButton className='ionMenuButton'/>

			</IonHeader>
			<IonContent style={{backgroundColor:"black"}} fullscreen>

				<div className={ styles.sumContainer }>
		

				
				
				<Link to="/history">History</Link>
					<br />
				<p >{ sumHistory }</p>
				
			
				

					<h1 style={{color:"white",fontSize:40}}>{isqual? sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") :null}</h1>
				
					
					
				
				</div>
				

			</IonContent>
			
			


			<IonFooter className={ styles.calculatorContainer }>
				
				<IonGrid className="ion-text-center ion-justify-content-center">
			
					{ buttons.map((buttonRow, index) => {

						return (
							<ButtonRow key={ index }>
								{ buttonRow.map(button => {

									return <Button key={ button.value } value={ button.value } special={ button.special } drawer={toggleDrawer} clickEvent={ handleClick } />;
								})}
							</ButtonRow>
						);
					})}
				
				</IonGrid>
				<div ref={drawerRef} style={{zIndex:5,position:drawerOpened == false?"absolute":'relative',width:'100%',height:'100%',backgroundColor:"black",borderColor:'black',borderWidth:1,borderRadius:20,}}>
					<div style={{marginTop:40,padding:10}}>
						{data != null?data.map((h,index)=>{
							return 	 <div key={index} style={{marginTop:10 ,display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
								<h3 style={{color:"white"}}>{h.expration}{' = '} {h.result}</h3>
							<IonIcon onClick={()=>deleteHistoryById(h.id)} icon={trash} style={{color:'red',marginTop:20,marginRight:20,fontSize:25}}/>
							</div>
						}):null}
					
					</div>
				
					

				




				
				
				
	   </div>
			</IonFooter>
		</IonPage>
	);
};

export default Home;