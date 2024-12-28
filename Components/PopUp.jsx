import "./PopUp.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
export default function Pop_Up() {
  const initialValues = {
    username: "",
    email: "",
    Phone_Number: "",
    subject: "",
    query: "",
  };
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues({
      username: "",
      email: "",
      Phone_Number: "",
      subject: "",
      query: "",
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Phone_Number) {
      errors.Phone_Number = "Phone_Number is required";
    } else if (values.Phone_Number.length < 10) {
      errors.Phone_Number = "Phone_Number must be more than 4 characters";
    } else if (values.Phone_Number.length > 10) {
      errors.Phone_Number =
        "Phone_Number cannot exceed more than 10 characters";
    }

    if (!values.query) {
      errors.query = "Message is required!";
    }
    return errors;
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className="Pop_up_">
        <Popup open={isOpen} onClose={() => setIsOpen(false)}>
          <form className="Pop_up_container" onSubmit={handleSubmit}>
            <div className="Pop_up_left">
              <div className="Pop_up_header">
                <h2 className="Pop_up_animation Pop_up_a1">Welcome</h2>
                <h4 className="Pop_up_animation Pop_up_a2">CONTACT US</h4>
              </div>
              <div className="Pop_up_form">
                <label>
                  {" "}
                  <p>{formErrors.username}</p>
                  <input
                    type="name"
                    name="username"
                    placeholder="Enter your Name"
                    value={formValues.username}
                    onChange={handleChange}
                    className="Pop_up_form-field Pop_up_animation Pop_up_a3"
                  />
                </label>

                <label>
                  <p>{formErrors.email}</p>
                  <input
                    className="Pop_up_form-field Pop_up_animation Pop_up_a3"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <p>{formErrors.Phone_Number}</p>
                  <input
                    className="Pop_up_form-field Pop_up_animation Pop_up_a4"
                    type="tel"
                    placeholder="Phone Number"
                    name="Phone_Number"
                    value={formValues.Phone_Number}
                    onChange={handleChange}
                  />
                </label>

                <p>{formErrors.query}</p>
                <label>
                  <textarea
                    className="Pop_up_form-field Pop_up_animation Pop_up_a4"
                    placeholder="type your message here"
                    name="query"
                    value={formValues.query}
                    onChange={handleChange}
                  ></textarea>
                </label>
                <button
                  className="Pop_up_animation Pop_up_a6 Pop_up_button-75"
                  // onClick={() => setIsOpen(false)}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="Pop_up_right"></div>
            <button
              className="Pop_up_btn_form_popup"
              onClick={() => setIsOpen(false)}
            >
              <ImCancelCircle />
            </button>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success">
                "THANKYOU" <br /> Your Query is successfully Submitted <br /> We
                will contact you soon.
              </div>
            ) : (
              <pre></pre>
            )}
          </form>
        </Popup>
      </div>
    </>
  );
}
