import React from "react";
import {Button,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";

import {Link,useNavigate} from "react-router-dom";


function Home() {
let history = useNavigate();

function setID(id,Name,Email,RNumber,Age) {
    localStorage.setItem("id",id);
    localStorage.setItem("Name",Name);
    localStorage.setItem("Email",Email);
    localStorage.setItem("RNumber",RNumber);
    localStorage.setItem("Age",Age);

}

function deleted(id) {
    let index = users.map(function (e) {
        return e.id;
    }).indexOf(id);
    users.splice(index,1);
    history("/")

}

    return(
        <div style={{}}>
            <Table striped border hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>RNumber</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((item) => {
                            return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.RNumber}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <Link to={'/edit'}>
                                        <Button onClick={(e) => setID(item.id,item.Name,item.Email,item.RNumber,item.Age)}
                                        variant="primary">
                                            Update
                                         </Button>
                                    </Link>
                                </td>
                                <td>
                                    
                                    <Button onClick={(e) => deleted(item.id)}
                                    variant="danger">
                                           Delete
                                    </Button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>

            </Table>
            <Link className="d-grid gap-2" style={{"text-decoration":"none"}} to="/create">
            <Button variant="success" size="lg">
                Create Record
            </Button>
            
            </Link>
        </div>
    )
}

export default Home;