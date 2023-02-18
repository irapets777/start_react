import React, {useState} from 'react';
import styles from "../styles/Pec.module.css";
const Pec = () => {
    let [counter, setCounter] = useState(0);
    function incrementConter() {
        setCounter(counter + 1)
        console.log("Counter:", counter)
    }
    function decrementCounter (){
        setCounter(counter - 1)
    }

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    
    return (
        <div>
            <h1 className={styles.title}>Pec</h1>
            <p>Hello</p>
            <form>
                <input onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="name"/>
                <input onChange={(e)=> {setEmail(e.target.value)}} type="text" placeholder="email"/>
            </form>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <div> <button className="btn btn-success" onClick={() => {incrementConter(counter + 1)}}>add +1</button></div>
            <div> <button className="btn btn-danger" onClick={() => {decrementCounter (counter - 1)}}>add -1</button></div>
        <h2>Reslt: {counter}</h2>
        </div>
    )
}

export default Pec