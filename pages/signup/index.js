import Link from "next/Link";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect, useContext } from "react";
import Button from "../../components/button";
import css from "./style.module.css";
import axios from "axios";

const signup = () => {
  const intialValues = {
    phoneNo: "",
    email: "",
    pass: "",
    passcheck: "",
  };

  const [phoneNo, setphoneNo] = useState("");
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validateForm = () => {
    return phoneNo.lenght >= 8 && email.length > 0 && pass.length < 7;
  };
  const onSubmit = () => {};

  const data = formValues;
  console.log(data, "ene bol striniyfy");

  // const AppDa = useContext(signupContext);
  // console.log("==========" + signupContext);
  // const data1 = JSON.parse(data);
  // console.log(data1, "ene bol parse hiigdsen");

  const handleSubmit = (e) => {
    console.log(e);
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("http://localhost:8001/register", data, {
        headers: headers,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const nmbr = /^[0-9]+$/;
    // if (!values.phoneNo) {
    //   errors.phoneNo = "utasni dugaara oruulna uu!";
    // } else if (!nmbr.test(values.phoneNo)) {
    //   errors.phoneNo = "dugaara zuv oruulna uu";
    // }
    if (!nmbr.test(values.phoneNo)) {
      errors.phoneNo = "utasni dugaar oruul";
    } else if (values.phoneNo.lenght < 8) {
      errors.phoneNo = "utasni dugaar 8 orontoi too baina";
    } else {
      null;
    }

    if (!values.email) {
      errors.email = "имэйл оруулна уу!";
    } else if (!regex.test(values.email)) {
      errors.email = "имэйл зөв оруулна уу!";
    }

    if (!values.pass) {
      errors.pass = "нууц үг оруулна уу!";
    } else if (values.pass.length < 8) {
      errors.pass = "нууц үг 8-с багагүй тэмдэгт байна";
    }

    if (!values.passcheck) {
      errors.passcheck = "нууц үг давтан оруулна уу!";
    } else if (values.passcheck !== values.pass) {
      errors.passcheck = "нууц үг таарахгүй байна";
    } else {
      null;
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className={css.Signup}>
      <h1 className={css.header}>Welcome!</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className={css.successmsg}>Бүртгэл амжилттай </span>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="phoneNo_user">
          <Form.Label>Утасны дугаар</Form.Label>
          <Form.Control
            type="phoneNo"
            name="phoneNo"
            id="phoneNo"
            value={formValues.phoneNo}
            onChange={handleChange}
            className={formErrors.phoneNo && "input-error"}
          />
          {formErrors.phoneNo && (
            <span className={css.error}>{formErrors.phoneNo}</span>
          )}
        </Form.Group>

        <Form.Group size="sm" controlId="email_user0">
          <Form.Label>Цахим шуудан</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
          {formErrors.email && (
            <span className={css.error}>{formErrors.email}</span>
          )}
        </Form.Group>

        <Form.Group size="sm" controlId="pass_user0">
          <Form.Label>Нууц үг</Form.Label>
          <Form.Control
            type="password"
            name="pass"
            id="pass"
            placeholder="том жижиг үсэг тоо тэмдэгт орно"
            value={formValues.pass}
            onChange={handleChange}
            className={formErrors.pass && "input-error"}
          />

          {formErrors.pass && (
            <span className={css.error}>{formErrors.pass}</span>
          )}
        </Form.Group>

        <Form.Group size="sm" controlId="pass_user1">
          <Form.Label>Нууц үг дахин оруулах </Form.Label>

          <Form.Control
            type="password"
            name="passcheck"
            id="passcheck"
            value={formValues.passcheck}
            onChange={handleChange}
            className={formErrors.passcheck && "input-error"}
          />
          {formErrors.passcheck && (
            <span className={css.error}>{formErrors.passcheck}</span>
          )}
        </Form.Group>
        <br />
        <div className="text-center">
          <Button className={css.button} value="Signup" />
        </div>

        <h6 className={css.jon}>
          <br />
          Аль хэдийнэ бүртгүүлсэн үү?
          {""}
          <Link href="/login"> Login </Link>{" "}
        </h6>
      </Form>
    </div>
  );
};

export default signup;
