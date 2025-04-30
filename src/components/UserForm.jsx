import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(5, "username should  be atleast five characters"),
  email: z.string().email("invalid email"),
  age: z.coerce.number().min(18, "Must be at least 18 years old"),
});

function UserForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(value) {
    console.log(value);
    alert("Form submiited");
  }
  return (
    <div className="h-screen w-full bg-gradient-to-r from-slate-300  flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Fill this Form
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              {...form.register("name")}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {form.formState.errors.name && (
              <p>{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              {...form.register("email")}
              placeholder="Enter your Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {form.formState.errors.email && (
              <p>{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="text-gray-700 font-medium mb-1">
              Age:
            </label>
            <input
              type="text"
              {...form.register("age")}
              placeholder="Enter your Age"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {form.formState.errors.age && (
              <p>{form.formState.errors.age.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-30 bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
