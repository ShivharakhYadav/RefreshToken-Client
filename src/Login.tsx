import { useForm } from 'react-hook-form'
import { login } from './services/service';
import { toast } from "react-toastify";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    console.log("---error", errors)
    const onFormSubmit = () => {
        try {

            login({}).then((data) => {
                console.log("")
            })
            console.log("called");
        } catch (error) {
            console.log("onsumbt eerere", error)
        }
    }

    return <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input {...register('firstName')} /><br />
            <input {...register('lastName')} />
            {errors.lastName && <p>Last name is required.</p>}<br />
            <input {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}<br />
            <input type="submit" />
        </form>
    </div>
}
export default Login