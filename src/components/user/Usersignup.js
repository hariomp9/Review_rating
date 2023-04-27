import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import "./usersignup.css"


const Usersignup = () => {
    const defaultValue = {
        name: "",
        email: "",
        password: "",
        number:"",

    }

        const validationSchema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        email: yup.string().required().email("Please enter email your email"),
        password: yup.string().required("Please enter password your password"),
        number: yup.string().required("Please enter number your number"),
    });

    const handleSubmit = (Values) => {
        console.log("Values :", Values);
    };

    return (
        <>
            <div className="container bg-warning"><br></br>
                <div className="col-md 12 text-center">
                    <h2>Sign-up page By Using formic</h2>
                    <br></br>
                    <Formik
                        initialValues={defaultValue}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="col-md-10">
                                <Field
                                    type="text" name="name"
                                    placeholder="Enter your name"
                                    className="form-control"
                                />
                                <p className="text-danger">
                                    <ErrorMessage name="name" />
                                </p>
                            </div>

                            <div className="col-md-10">
                                <Field
                                    type="text" name="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                />
                                <p className="text-danger">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>

                            <div className="col-md-10">
                                <Field
                                    type="password" name="password"
                                    placeholder="Enter your password"
                                    className="form-control"
                                />
                                <p className="text-danger">
                                    <ErrorMessage name="password" />
                                </p>
                            </div>

                            <div className="col-md-10">
                                <Field
                                    type="number" name="number"
                                    placeholder="Enter your number"
                                    className="form-control"
                                />
                                <p className="text-danger">
                                    <ErrorMessage name="number" />
                                </p>
                            </div>
                            <button className="btn btn-primary mt-4" type="Submit">Submit</button>

                        </Form>
                    </Formik>
                </div></div>
        </>
    )
}
export default Usersignup;