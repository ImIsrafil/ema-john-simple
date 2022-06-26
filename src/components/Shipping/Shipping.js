import React from 'react'
import { useForm } from 'react-hook-form';
import './Shipping.css';
import useAuth from './../../hooks/useAuth';

const Shipping = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    const { user } = useAuth();

    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} placeholder="Full Name" />
                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="text" {...register("address", { required: true })} placeholder="Address" />
                <input type="text" {...register("city", { required: true })} placeholder="City" />
                <input type="number" {...register("phone", { required: true })} placeholder="Phone" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Shipping
