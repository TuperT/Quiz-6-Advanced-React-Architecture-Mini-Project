import { useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import '../styles/LoginPage.css'

const LoginPage = () => {
    const { login } = useAuth();

    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "email") {
            if (!value.includes("@")) {
                setError("Enter a valid email address");
            } else {
                setError("");
            }
        }

        if (name === "password") {
            if (value.length < 5) {
                setError("Password must be longer than 4 characters");
            } else {
                setError("");
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.email === "" || formData.password === "") {
            setError("Form needed to be filled");
            return;
        }
        if (error !== "") {
            setError("Fix the form error");
            return;
        }
        login(formData.email, formData.password);
    }

    return (
        <div id="layout">
            <div id='container'>
                <div id="title">
                    <p id="form-title">WELCOME BACK</p>
                    <p id="form-title2">Sign in to <br /> your <br /> account</p>
                    <p id="form-title3">Acces your cart and continue shopping</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <div id="error">
                            <p>{error}</p>
                        </div>
                    )}

                    <div id="email">
                        <label htmlFor="email">EMAIL ADDRESS</label> <br />
                        <input
                            type="email"
                            name="email"
                            id="form-email"
                            placeholder='you@example.com'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div id="password">
                        <label htmlFor="password">PASSWORD</label> <br />
                        <input
                            type="password"
                            name="password"
                            id="form-password"
                            placeholder='************'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type='submit'>Sign In →</button>
                </form>

                <p id='form-title4'>Use any email - password (4+ chars) to sign in</p>
            </div>
        </div>
    )
}

export default LoginPage