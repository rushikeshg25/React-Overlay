import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [Username, setUsername] = useState("");
  const [UserAge, setUserAge] = useState("");
  const [valid, setvalid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      Username.trim().length === 0 ||
      UserAge.trim().length === 0 ||
      +UserAge < 0
    ) {
      setvalid(false);
    } else {
      props.getUsers(Username, UserAge);
    }
    setUserAge("");
    setUsername("");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };

  const isokHandler = () => {
    setvalid(true);
  };

  return (
    <div>
      <div className={classes.backdrop} />
      {!valid && (
        <ErrorModal
          title="invalid"
          message="Message Invalid"
          isok={isokHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            value={Username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={UserAge} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
