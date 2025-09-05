import React from 'react';

const HexagonPulse = () => {
    return (
        <div class="md:w-1/2 flex justify-center">
                <div class="relative">
                    <svg width="600" height="400" viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.8"></stop>
                                <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.8"></stop>
                            </linearGradient>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.4"></stop>
                                <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.4"></stop>
                            </linearGradient>
                        </defs>
                        
                        <g class="rotating-object">
                            <polygon points="100,20 140,50 140,110 100,140 60,110 60,50" fill="url(#grad1)" stroke="#4f46e5" stroke-width="1">
                                <animate attributeName="points" dur="15s" repeatCount="indefinite" values="100,20 140,50 140,110 100,140 60,110 60,50;
                                           100,30 150,60 150,120 100,150 50,120 50,60;
                                           100,20 140,50 140,110 100,140 60,110 60,50"></animate>
                            </polygon>
                            
                            <circle cx="100" cy="80" r="30" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.8">
                                <animate attributeName="r" dur="8s" repeatCount="indefinite" values="30;40;30"></animate>
                            </circle>
                            
                            <circle cx="100" cy="80" r="50" fill="none" stroke="#4f46e5" stroke-width="1" opacity="0.5">
                                <animate attributeName="r" dur="12s" repeatCount="indefinite" values="50;60;50"></animate>
                            </circle>
                            
                            <circle cx="100" cy="80" r="70" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.3">
                                <animate attributeName="r" dur="16s" repeatCount="indefinite" values="70;80;70"></animate>
                            </circle>
                        </g>
                    </svg>
                    
                    <div class="absolute inset-0">
                        <svg width="600" height="400" viewBox="0 0 200 200">
                            <circle cx="30" cy="40" r="1" fill="#ffffff">
                                <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="0s"></animate>
                            </circle>
                            <circle cx="70" cy="30" r="1" fill="#ffffff">
                                <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="0.5s"></animate>
                            </circle>
                            <circle cx="150" cy="30" r="1" fill="#ffffff">
                                <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="1s"></animate>
                            </circle>
                            <circle cx="170" cy="80" r="1" fill="#ffffff">
                                <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="1.5s"></animate>
                            </circle>
                            <circle cx="150" cy="150" r="1" fill="#ffffff">
                                <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="2s"></animate>
                            </circle>
                            <circle cx="70" cy="170" r="1" fill="#ffffff">
                                <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="2.5s"></animate>
                            </circle>
                            <circle cx="30" cy="130" r="1" fill="#ffffff">
                                <animate attributeName="opacity" dur="3s" values="0;1;0" repeatCount="indefinite" begin="1.5s"></animate>
                            </circle>
                        </svg>
                    </div>
                </div>
            </div>
    );
};

export default HexagonPulse;
