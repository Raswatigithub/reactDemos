import React, { useState,useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModule from '../UI/ErrorModule'
import Wrapper from '../Helpers/Wrapper'
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    // const [enteredUsername,setEnteredUserName]=useState('');
    // const [enteredAge,setAge]=useState('');
    const [error,setError]=useState('');

    const addUserHandler=(event)=>{
        //we are going to validate the inputs,and
        //if any fields are missing or wrong inputs
        //are provided then we pop out the dialog
        event.preventDefault();
        const enteredUsername=nameInputRef.current.value;
        const enteredAge=ageInputRef.current.value;
        if(enteredUsername.trim().length ===0 || enteredAge.trim().length ===0){
            setError({
                title:'Inavlid Input',
                message:'Please enter a valid name and age (non-empty values).',
            })
            return;
        }
        if(+enteredAge< 1){
            setError({
                title:'Inavlid Age',
                message:'Please enter a valid age(>0)',
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        //here we are changing the property.ideally avoid it!
       nameInputRef.current.value=' ';
       ageInputRef.current.value='';
    }
    
    const errorHandler=()=>{
        setError(null)
    }
  return (
    <Wrapper>
        {error &&(
            <ErrorModule
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
        )}
       
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input 
                id='username'
                type='text'
                // value={enteredUsername}
                // onChange={usernameChangeHandler}
                ref={nameInputRef}                
                ></input>
                <label htmlFor='age'>Age (Years)</label>
                <input 
                id='age'
                type='number'
                // value={enteredAge}
                // onChange={ageChangeHandler}
                ref={ageInputRef}
                ></input>
                <br></br>
                <Button type='submit'>Add User</Button>
            </form>

        </Card>
       
    
    </Wrapper>
  )
}

export default AddUser