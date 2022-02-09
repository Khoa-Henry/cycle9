import react from 'react';
import './index.css';
import Cycle9Button from '../../components/Cycle9Button/index.js';
import MUIButton from '../../components/MUIButton/index.js';

//Page component aka a parent and the buttons are child components
function AboutUs() {
    const [show, setShow] = react.useState(false)
    const [status, setStatus] = react.useState('this is state');
    const [newState, setNewState] = react.useState({
        firstName: 'Henry', 
        lastName: 'Nguyen', 
        age: 19, 
        gender: 'male'
    })
    const [userInput, setUserInput] = react.useState('');
    const [userInputList, setUserInputList] = react.useState([]);

    const captureUserInput = () => {
        const newArray = [...userInputList];
        newArray.unshift(userInput)
        setUserInputList(newArray)
    }

    const deleteItem = () => {
        const newArray = [...userInputList]
        let index = newArray.findIndex(i => i === i)
        newArray.splice(index,1)
        setUserInputList(newArray)
    }


    const onHello = () => {
        setStatus('Hello')
        setNewState({firstName: 'john', lastName: 'cena', age: 50, gender: 'male'});
    }

    const onGoodBye = () => {
        setStatus('Good Bye');
    }

    const showMe = () => {
        setShow(true)
    }
    const dontShowMe = () => {
        setShow(false)
    }

    return (
        <div>
            <button onClick={showMe}>show me</button>
            <button onClick={dontShowMe}> hide</button>
            {show === true && (
                <div>
                    {/* <h1>About us page</h1> */}
                    <h1>{status}</h1>
                    <h1>Full name: {newState.firstName} {newState.lastName} </h1>
                    <h1>Age: {newState.age} </h1>
                    <h1>Gender: {newState.gender}</h1>
                    <MUIButton buttonName="hello" style="contained" turnoff={false} onClick={onHello}/>
                    <MUIButton buttonName="something" style="outlined" turnoff={false}/> 
                    <MUIButton buttonName="good bye" style="contained" turnoff={false} onClick={onGoodBye}/>
                    <br />
                    <br />
                    <br />
                    <br/>
                    <br/>
                    <input onChange={(e) => setUserInput(e.target.value)}/>
                    <button onClick={captureUserInput}>submit</button>
                    <br/>
                    {userInputList.map((item,index) => <h1 key={index}>{item} <button onClick={deleteItem}>delete</button></h1>)}
                </div>
            )}
        </div>
    );
}

export default AboutUs;
