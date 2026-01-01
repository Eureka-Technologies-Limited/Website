import React from "react";
import Navbar from "../components/navbar";

function HomePage() {
    return (
        <div className="h-screen w-screen bg-darkBlue">
            <div>
                <Navbar />
            </div>
            <h2 className='text-white m-4'>Eureka Technologies</h2>
        </div>
    )
}

export default HomePage;