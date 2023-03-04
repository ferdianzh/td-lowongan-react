import React, { Component } from 'react';
import http from "../http-common";

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  setUsername(value) { this.setState({ username: value }) }
  setPassword(value) { this.setState({ password: value }) }

  handleSubmit = async e => {
    e.preventDefault()
    const data = this.state
    const res = await http.post("/auth/register", data)
    this.props.onLogin(res.data.data.token)
  }

  render() { 
    return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login
                    </h1>
                    <form method="post" className="space-y-4 md:space-y-6" onSubmit={this.handleSubmit}>
                        <div>
                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input
                              type="username"
                              name="username"
                              id="username"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required=""
                              onChange={e => this.setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder=""
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required=""
                              onChange={e => this.setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    );
  }
}
 
export default Login;