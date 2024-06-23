import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white ">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register('name', { required: true })}
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            {/* Email */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            {/* Message */}
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register('message', { required: true })}
              />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button type="submit" className="w-full bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-700 duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
