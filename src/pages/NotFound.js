import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-darkBlue via-blue-950 to-zinc-950 text-white flex items-center justify-center">
            <div className="max-w-2xl px-6 text-center">

                <Terminal className="w-14 h-14 mx-auto mb-6 text-[#f39e3c]" />

                <h1 className="text-6xl font-bold tracking-tight mb-4">
                    404
                </h1>

                <p className="text-xl text-[#A8B0C2] mb-6">
                    Resource not found
                </p>

                <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-left text-sm text-[#A8B0C2] mb-8 font-mono">
                    <p>
                        <span className="text-[#f39e3c]">$</span> GET /requested-resource
                    </p>
                    <p className="mt-2 text-red-400">
                        error: route_not_found
                    </p>
                    <p className="mt-2">
                        hint: verify the path or return to a known endpoint. If this is not expected please Contact Us: <Link className="text-red-400" to={"/contact"}>Here</Link>.
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    <Button
                        variant="outline"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Go Back
                    </Button>

                    <Button onClick={() => navigate("/")}>
                        Return Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
