import React, {useEffect, useState} from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { Link, useNavigate } from "react-router-dom";



function Edit() {

    let history = useNavigate();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [rnumber, setrnumber] = useState("");
    const [age, setage] = useState("");
    const [id, setid] = useState("");

    let index = users.map(function (e) {
        return e.id;
    }).indexOf(id);

    const handelSubmit = (e) => {
        e.preventDefault();

        if(name === "" || email === "" || rnumber === "" || age === "") {
            alert("Invalid Input");
            return;
        }
        
        let a = users[index];
        a.Name = name;
        a.Email = email;
        a.RNumber = rnumber;
        a.Age = age;

       
        history("/")
    }

    useEffect(() => {
        setname(localStorage.getItem("Name"))
        setemail(localStorage.getItem("Email"))
        setrnumber(localStorage.getItem("RNumber"))
        setage(localStorage.getItem("Age"))
        setid(localStorage.getItem("id"))
    },[])

    return (
        <div>
            <Form className="d-grid gap-2" style={{margin:"5rem"}}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="Enter Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    placeholder="Enter Email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="RNumber">
                    <Form.Control
                    value={rnumber}
                    onChange={(e) => setrnumber(e.target.value)}
                    type="text"
                    placeholder="Enter RNumber"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Age">
                    <Form.Control
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                    type="text"
                    placeholder="Enter Age"
                    />
                </Form.Group>
                <Button onClick={ (e) => handelSubmit(e)} variant="success" type="submit">
                    Update
                </Button>
                <Link className="d-grid gap-2" to="/">
                   <Button variant="info" size="lg">
                    Home
                   </Button>
                 
                </Link>
            </Form>
        </div>
    )
}
export default Edit;