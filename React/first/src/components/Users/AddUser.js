import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const addUserHandler = (event) => {
        console.log(username, age);

        event.preventDefault()  // to prevent the reloading of page on calling of function
        if (username.trim().length == 0 || age.trim().length == 0) return;
        if (+age < 1) return;

        props.onAddUser(username, age)

        setUsername('');
        setAge('')
    };


    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }


    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                {/* use of htmlFor is that if we click on the username then it will highlight the input tag */}
                <input id="username" type="text" value={username} onChange={usernameChangeHandler} />

                <label htmlFor='age'>Age(Years)</label>
                <input id="age" type="number" value={age} onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;