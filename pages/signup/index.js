import Link from "next/Link";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import Button from "../../components/button";
import css from "./style.module.css";
import axios from "axios";
// import signupContext from "../../context/signupContext";

const Signup = () => {
  const intialValues = {
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [phone, setPhone] = useState("");
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  function validateForm() {
    return phone.lenght >= 8 && email.length > 0 && password.length < 7;
  }
  const onSubmit = () => {};

  const data = JSON.stringify(formValues);
  console.log(data, "ene bol striniyfy");
  // setFormErrors(validate(formValues));
  // const AppDa = useContext(signupContext);
  // console.log("==========" + signupContext);
  // const data1 = JSON.parse(data);
  // console.log(data1, "ene bol parse hiigdsen");

  const handleSubmit = (e) => {
    console.log(e);
    axios
      .post("http://192.168.2.44:8001/register", { data })
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
    // if (!values.phone) {
    //   errors.phone = "utasni dugaara oruulna uu!";
    // } else if (!nmbr.test(values.phone)) {
    //   errors.phone = "dugaara zuv oruulna uu";
    // }
    if (!nmbr.test(values.phone)) {
      errors.phone = "utasni dugaar oruul";
    } else if (values.phone.lenght < 8) {
      errors.phone = "utasni dugaar 8 orontoi too baina";
    } else {
      null;
    }

    if (!values.email) {
      errors.email = "имэйл оруулна уу!";
    } else if (!regex.test(values.email)) {
      errors.email = "имэйл зөв оруулна уу!";
    }

    if (!values.password) {
      errors.password = "нууц үг оруулна уу!";
    } else if (values.password.length < 7) {
      errors.password = "нууц үг 7-с багагүй тэмдэгт байна";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "нууц үг давтан оруулна уу!";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "нууц үг таарахгүй байна";
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
        <Form.Group size="sm" controlId="phone">
          <Form.Label>Утасны дугаар</Form.Label>
          <Form.Control
            type="phone"
            name="phone"
            id="phone"
            value={formValues.phone}
            onChange={handleChange}
            className={formErrors.phone && "input-error"}
          />
          {formErrors.phone && (
            <span className={css.error}>{formErrors.phone}</span>
          )}
        </Form.Group>

        <Form.Group size="sm" controlId="email">
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

        <Form.Group size="sm" controlId="password">
          <Form.Label>Нууц үг</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />

          {formErrors.password && (
            <span className={css.error}>{formErrors.password}</span>
          )}
        </Form.Group>

        <Form.Group size="sm" controlId="password">
          <Form.Label>Нууц үг дахин оруулах </Form.Label>

          <Form.Control
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={formValues.confirm_password}
            onChange={handleChange}
            className={formErrors.confirm_password && "input-error"}
          />
          {formErrors.confirm_password && (
            <span className={css.error}>{formErrors.confirm_password}</span>
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

export default Signup;
