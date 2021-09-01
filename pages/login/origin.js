import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../components/button";
import axios from "axios";
import css from "./style.module.css";
import Link from "next/Link";
export default function login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    console.log(e);

    const headers = {
      Authorization: "Basic dGVzdGFwcDE6YXBwX3Bhc3NfMTIzNDU2Nzg5",
    };

    axios.post(
      `http://192.168.3.40:7700/oauth/token?username=${username}&password=${password}&grant_type=password`,
      null,
      {
        headers: headers,
        auth: {
          username: "testapp1",
          password: "app_pass_123456789",
        },
      }
    );

    axios
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();

    setIsSubmitting(true);
  };
  // function validateForm() {
  //   return username.length > 0 && password.length > 0;
  // }
  // function handleChange(event) {
  //   event.preventDefault();
  // }
  // function darah(event) {
  //   event.();

  // }

  return (
    <>
      <div className={css.Login}>
        <h1 className={css.header}>Welcome Back!</h1>
        <Form onClick={handleChange}>
          <Form.Group size="sm" controlId="username">
            <Form.Label>Цахим шуудан </Form.Label>
            <Form.Control
              autoFocus
              type="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
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
