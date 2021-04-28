import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {GlobalContext} from '../components/GlobalState';

function CreateStudent(){

let history = useHistory();

const [lastName, setLastName] = useState('');
const [firstName, setFirstName] = useState('');
const [middleName, setMiddleName] = useState('');
const {createStudent, student} =useContext
(GlobalContext);

const onSubmit = e => {
    e.preventDefault();

    const newStudent ={
        id: student.length+1,
        lastName,
        firstName,
        middleName
    }
    console.log(newStudent);
    createStudent(newStudent);


}






return(
<>
<nav className="navAdmin">
            <h3>PNC LOGO</h3>


            <ul className="navLinkAdmin">
                <li>         </li>
            <Link to='/admin'>
                <li>Back to Admin Page</li>
            </Link >

            </ul>
</nav>

<h2 className="headingCreate">Create Student Record</h2>

<div className = "createForm">



            <div className = "form-inner">

            <form onSubmit = {onSubmit}>
            <div className = "form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input className="formInput" type="text" name="lastName" id="lastName" value={lastName}
                onChange = {(e) => setLastName(e.target.value)}/>
            </div>

            <div className = "form-group">
                <label htmlFor="firstName">First Name:</label>
                <input className="formInput" type="text" name="firstName" id="firstName" value={firstName}
                onChange = {(e) => setFirstName(e.target.value)}/>
            </div>

            <div className = "form-group">
                <label htmlFor="middleName">Middle Name:</label>
                <input className="formInput" type="text" name="middleName" id="middleName" value={middleName}
                onChange = {(e) => setMiddleName(e.target.value)}/>
</div>
            <button className="btnCreate" type="submit"  >SAVE STUDENT</button>

            </form>
</div>

</div>
</>




);


}

export default CreateStudent;