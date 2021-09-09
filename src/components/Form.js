import React from 'react'
import useForm from './useForm';


const Form = () => {
    const { values, handleChange, handleSubmit } = useForm(login);
    function login () {
        console.log(values);
}
    return (
        <div className="h-full bg-gray-700">
      <div className="container mx-auto p-2">
        <div className="grid grid-flow-col col-span-4">
          <div className="box-content h-32 w-full border-2">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="text-gray-200">Email Address</label>
                <div className="control">
                  <input className="input" type="email" placeholder="email" name="email" onChange={handleChange} value={values.email} required />
                </div>
              </div>
              <div className="field">
                <label className="text-gray-200">Password</label>
                <div className="control">
                  <input className="" type="password" placeholder="password" name="password" onChange={handleChange} value={values.password} required />
                </div>
              </div>
              <button type="submit" className="text-gray-200 w-1/2 mt-3 bg-blue-300">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Form;