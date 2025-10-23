import React, { useState } from "react"; // Added useState import

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "formData");
    };

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full py-6 text-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-primary">Admin</span> Login
                        </h1>
                        <p className="font-light">
                            Enter your credentials to access the admin panel
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 w-full sm:max-w-md text-gray-600"
                    >
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                type="email"
                                required
                                placeholder="your email id"
                                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Password</label>
                            <input
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                type="password"
                                required
                                placeholder="your password"
                                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
