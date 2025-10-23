import React from "react";

const Searchbar = () => {
    return (
        <div>
            <form className="flex justify-between max-w-lg max-sm:scale:75 mx-auto border border-gray-300 bg-white rounded-full overflow-hidden">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-4 outline-none"
                />
                <button
                    type="submit"
                    className="bg-primary text-white px-8 py-2 m-1.5 rounded-full hover:scale-105 transition-all cursor-pointer"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
