import React from 'react';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import JSONData from '../data.json';

function SearchStudent(){

let history = useHistory();

const [searchTrans, setSearchTrans] = useState('')
return(
    <div>
        <nav className="navAdmin">
            <h3>PNC LOGO</h3>


                        <ul className="navLinkAdmin">
                            <li>         </li>
                        <Link to='/admin'>
                            <li>Back to Admin Page</li>
                        </Link >

                        </ul>
        </nav>

        <div className = "search">
            <input className="inputSearch" type="text" placeholder="Search by ID or Lastname..."
            onChange={(event) => {setSearchTrans(event.target.value)
            }}
            />

            {JSONData.filter((val) =>{
                if(setSearchTrans === "" ){
                    return val
                }else if
                    (val.lastName.toLowerCase().includes(searchTrans.toLowerCase()) ) {
                        return val
                }else if
                    (val.firstName.toLowerCase().includes(searchTrans.toLowerCase()) ) {
                        return val
                }else if
                    (val.middleName.toLowerCase().includes(searchTrans.toLowerCase()) ) {
                        return val
                }else if
                    (val.id.toLowerCase().includes(searchTrans.toLowerCase()) ) {
                        return val
                }

            }).map((val, key)=>{
             return(

              <div className="stud" key ={key}>
            <p>[ {val.id} ]  {val.lastName}, {val.firstName} {val.middleName}</p><br/>


            <p className="trans"> TRANSACTION MADE:<br/><br/></p>
            <ul>
              <li>{val.transaction1}</li>
              <li>{val.transaction2}</li>
            </ul>

            </div>
            );
            })}
        </div>
    </div>
);


}

export default SearchStudent;