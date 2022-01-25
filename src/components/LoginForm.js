import React from 'react';
import { useState } from 'react';

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "", })

  const submitHanler = e => {
    e.preventDefault();
    Login(details)
  }

  return (
    <form className="w-full max-w-sm mt-6 flex mx-auto flex-col p-[16px]">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Nguyen Huu Long"
            onChange={e => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-email"
            type="text"
            placeholder="huulongn15@gmail.com"
            onChange={e => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            placeholder="******************"
            onChange={e => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={submitHanler}
          >
            LOGIN
          </button>
        </div>
      </div>
      {(error !== '') ? (
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 my-3 text-red-600 text-[18px] font-bold">
            {error}
          </div>
        </div>
      ) : ''}
    </form>
  )
}

export default LoginForm;
