import { useForm } from 'react-hook-form'
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log("---error", errors)
    const onFormSubmit = () => {
        console.log("called");

        // setError("lastname", { message: "rjekgjnkn" }, { shouldFocus: true })
    }
    return <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input {...register('firstName')} /><br />
            <input {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}<br />
            <input {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}<br />
            <input type="submit" />
        </form>
    </div>
}
export default Login