import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
export default function ErrorModal(props) {
  const ok = () => {
    props.isok();
  };
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={ok}>OK</button>
      </footer>
    </Card>
  );
}
