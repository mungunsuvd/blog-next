import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../components/button";
import css from "./style.module.css";
import Link from "next/Link";
export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  // function darah(event) {
  //   event.();

  // }

  return (
    <>
      <div className={css.Login}>
        <h1 className={css.header}>Welcome Back!</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="sm" controlId="email">
            <Form.Label>Цахим шуудан </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="sm" controlId="password">
            <Form.Label>Нууц үг</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <div className="text-center">
            <Button className={css.button} value="Login" />
          </div>

          <h6 className={css.jon}>
            <br />
            Бүртгэлгүй юу?
            <Link href="/signup"> Create an account</Link>
          </h6>
        </Form>
      </div>
    </>
  );
}
