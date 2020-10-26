import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../Actions/Hobby';
import HobbyList from '../Components/Home/HobbyList';

// HomePage.prototype = {

// }

const randomNumber = ()=>{
    return 1000 + Math.trunc((Math.random()*9000));
}

const HomePage = () => {
    const hobbyList = useSelector(state =>state.hobby.list);

    const activeId = useSelector(state =>state.hobby.activeId)
    
    const dispatch = useDispatch();

    const handleAddHobbyClick = ()=>{
        //Random hoby object id + title
        const newId = randomNumber;
        const newHobby = {
            // id:casual.uuid,
            // title:casual.title
            id:newId,
            title:`Hobby ${newId}`
        }
        //Dispatch action to add a new hobby to redux store

        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleHobbyClick = (hobby)=>{
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div className="home-page">
            <h1>REDUX HOOKS - Home Pages</h1>
            <button onClick = {handleAddHobbyClick()}>Random Hobby</button>
            <HobbyList 
            hobbyList={hobbyList}
            activeId = {activeId}
            onHobbyClick = {handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;
