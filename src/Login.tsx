import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { login } from './services/service';
import { showMessage } from './helper';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [formValues, setFormValues] = useState({
        email: "test@gmail.com",
        password: "1234"
    })

    useEffect(() => {
        (async () => {
            const loginData = await login(formValues);
        })();
    }, [])
    const onFormSubmit = async () => {
        try {
            console.log("cakked")
            const loginData = await login(formValues);
            console.log("--logindata", loginData);

            if (loginData.success) {
                localStorage.setItem("accessToken", loginData.data.accessToken);
                sessionStorage.setItem("refreshToken", loginData.data.accessToken);
                // navigate("/dashboard")
            }
            else {
                console.log("called")
                showMessage(loginData.message as any)
            }
        } catch (error) {
            console.log("onsumbt eerere", error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name)
        setFormValues({ ...formValues, [name]: value })
    }
    return <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label>Email</label><br />
            <input {...register('email', { value: formValues.email })} onChange={handleChange} />
            {errors.email && <p>email is required.</p>}<br />
            <label>Password</label><br />
            <input {...register('password', { value: formValues.password })} onChange={handleChange} />
            {errors.password && <p>password is required.</p>}<br />
            <input type="submit" />
        </form>
    </div>
}
export default Login