import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .email("You have enter an invalid email address")
            .required("Required"),
        rollno: Yup.number()
            .positive("Invalid roll number")
            .integer("Invalid roll number")
            .required("Required"),
    });
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <p>Name:</p>
                        <Field name="name" type="text"
                               className="form-control" />
                        <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <p>Email:</p>
                        <Field name="email" type="text"
                               className="form-control" />
                        <ErrorMessage
                            name="email"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <p>Rollno:</p>
                        <Field name="rollno" type="number"
                               className="form-control" />
                        <ErrorMessage
                            name="rollno"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup >
                    <div className="d-grid gap-2">
                    <Button variant="danger" size="lg"
                            block="block" type="submit">
                        {props.children}
                    </Button>
                </div>
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;
