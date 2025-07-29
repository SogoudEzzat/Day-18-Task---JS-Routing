import React, { useEffect, useState } from 'react';
import Dogs from '../Dogs/Dogs';
import { Link, Outlet } from "react-router-dom";

export default function Gallery() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("Ahmed");

  console.log("Render...");

 
  useEffect(() => {
    console.log("Mounting...");
    test();
  }, []);

  useEffect(() => {
    if (counter === 0) return;
    console.log("Update phase for counter...");
  }, [counter]);
  useEffect(() => {
    if (userName === "Ahmed") return;
    console.log("Update phase for userName...");
  }, [userName]);
  useEffect(() => {
    if (counter === 0 && userName === "Ahmed") return;
    console.log("Update phase...");
  }, [counter, userName]);


  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("Mounting interval...");
    const clr = setInterval(() => {
      console.log("Interval Fired");
    }, 500);

    return () => {
      console.log("Unmounting interval...");
      clearInterval(clr);
    };
  }, []);


  useEffect(() => {
    console.log("useEffect (no deps) - runs after every render");
  });


  function sayHello() {
    console.log("SayHello");
  }

  function test() {
    console.log("Hello from test");
  }

  function changeCounter() {
    setCounter(counter + 1);
  }

  function changeUserName() {
    setUserName("Omar");
  }

  useEffect(() => {
    sayHello();
  }, []);

  return (
    <div className="container">
      <h1>Gallery Page</h1>
      <p>Counter: {counter}</p>
      <p>UserName: {userName}</p>

      <button className="btn btn-primary me-2" onClick={changeCounter}>
        Increase Counter
      </button>
      <button className="btn btn-secondary" onClick={changeUserName}>
        Change User Name
      </button>

      <hr />

      <Link to="cats">Cats</Link> | <Link to="dogs">Dogs</Link>

      <Outlet />
    </div>
  );
}
