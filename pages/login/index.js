import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../components/button";
import css from "./style.module.css";
import Link from "next/Link";
import axios from "axios";
// import Cookies from "js-cookie"
// import {Redirect} from "next"


export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event)=> {
    console.log(event);
    axios
      .post(`http://localhost:7700/oauth/token?username=${email}&password=${password}&grant_type=password`,null,{
          headers: {
            'Authorization': 'Basic dGVzdGFwcDE6YXBwX3Bhc3NfMTIzNDU2Nzg5'
          },

          
        })
        .then((result) => {
          console.log(result);
        })
        
        .catch((err) => {
          console.log(err);
        });
      event.preventDefault();
      setIsSubmitting(true);
  }

  return (
    <>
      <div className={css.Login}>
     {/* {email ? (<Redirect/>)} */}
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
