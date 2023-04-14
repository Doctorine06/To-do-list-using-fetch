import React from "react";
import Todo from "./Todo.jsx";
import Task from "./Task.jsx";
import Footer from "./footer.jsx";
import { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [input,setInput] = useState("")
	const [todos,setTodos] = useState ([])
	const [editTodo,setEditTodo] = useState(null)
	fetch('https://assets.breatheco.de/apis/fake/todos/user/Doctorine06', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
		setTodos(data)
        //here is where your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
	return (
		<div className="container-fluid">
			<Todo />
		</div>
	);
};

export default Home;