import { AuroraText } from '@/components/ui/aurora-text';
import React from 'react';

export default function Section2() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="font-semibold tracking-wide uppercase">
                    <AuroraText
                        colors={[
                            '#10b981',
                            '#059669',
                            '#34d399',
                            '#064e3b',
                            '#6ee7b7',
                        ]}
                    >
                        Nos spécialités
                    </AuroraText>
                </h1>
                <p className="mt-3 font-serif text-2xl md:text-4xl tracking-tight italic">
                    Tous vos besoins médicaux couverts
                </p>
                <p className="mt-3 text-sm">
                    Plus de 120 médecins experts dans 20+ spécialités.
                </p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                    <div>
                        <div className="group flex h-50 w-50 cursor-pointer flex-col items-center justify-center rounded-[30px] border border-slate-50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 drop-shadow-md"
                                >
                                    <path
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                        fill="url(#heartGradient)"
                                    />
                                    <path
                                        d="M13 5.5c.5-1 1.5-1.5 2.5-1.5M11 5.5c-.5-1-1.5-1.5-2.5-1.5"
                                        stroke="#ffffff"
                                        strokeWidth="0.8"
                                        strokeLinecap="round"
                                        opacity="0.6"
                                    />

                                    <defs>
                                        <linearGradient
                                            id="heartGradient"
                                            x1="2"
                                            y1="3"
                                            x2="22"
                                            y2="21.35"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#ff4b81" />{' '}
                                            <stop
                                                offset="1"
                                                stopColor="#2b59c3"
                                            />{' '}
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="mb-2 font-sans text-2xl font-bold text-[#001a41]">
                                cardiologie
                            </h3>

                            <p className="text-lg font-medium text-slate-500">
                                médecins
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="group flex h-50 w-50 cursor-pointer flex-col items-center justify-center rounded-[30px] border border-slate-50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 drop-shadow-md"
                                >
                                    <path
                                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                        fill="url(#tealGradient)"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                        fill="white"
                                        fillOpacity="0.3"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="1.5"
                                        fill="white"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="tealGradient"
                                            x1="1"
                                            y1="4"
                                            x2="23"
                                            y2="20"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2dd4bf" />
                                            <stop
                                                offset="1"
                                                stopColor="#0d9488"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="mb-2 font-sans text-2xl font-bold text-[#001a41]">
                                Ophtalmologie
                            </h3>

                            <p className="text-lg font-medium text-slate-500">
                                médecins
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="group flex h-50 w-50 cursor-pointer flex-col items-center justify-center rounded-[30px] border border-slate-50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 drop-shadow-md"
                                >
                                    <path
                                        d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1 5 1 8 0 3 1 4 5 4s5-1 5-4c0-3 1-4.5 1-8 0-3.5-2.5-6-6-6z"
                                        fill="url(#blueGradient)"
                                    />
                                    <path
                                        d="M9 7c0-1 1-2 3-2s3 1 3 2"
                                        stroke="white"
                                        strokeWidth="0.8"
                                        strokeLinecap="round"
                                        opacity="0.5"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="blueGradient"
                                            x1="6"
                                            y1="2"
                                            x2="18"
                                            y2="20"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#60a5fa" />
                                            <stop
                                                offset="1"
                                                stopColor="#2b59c3"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="mb-2 font-sans text-2xl font-bold text-[#001a41]">
                                Dentiste
                            </h3>
                            <p className="text-lg font-medium text-slate-500">
                                médecins
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="group flex h-50 w-50 cursor-pointer flex-col items-center justify-center rounded-[30px] border border-slate-50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 drop-shadow-md"
                                >
                                    <circle
                                        cx="12"
                                        cy="8"
                                        r="5"
                                        fill="url(#orangeGradient)"
                                    />
                                    <path
                                        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                        fill="url(#orangeGradient)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="orangeGradient"
                                            x1="4"
                                            y1="3"
                                            x2="20"
                                            y2="21"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fbbf24" />
                                            <stop
                                                offset="1"
                                                stopColor="#f59e0b"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="mb-2 font-sans text-2xl font-bold text-[#001a41]">
                                Pediatrie
                            </h3>

                            <p className="text-lg font-medium text-slate-500">
                                médecins
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="group flex h-50 w-50 cursor-pointer flex-col items-center justify-center rounded-[30px] border border-slate-50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 drop-shadow-md"
                                >
                                    <path
                                        d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
                                        fill="url(#purpleGradient)"
                                    />
                                    <path
                                        d="M12 7v10M7 12h10"
                                        stroke="white"
                                        strokeWidth="0.5"
                                        opacity="0.5"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="purpleGradient"
                                            x1="3"
                                            y1="3"
                                            x2="21"
                                            y2="21"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#a855f7" />
                                            <stop
                                                offset="1"
                                                stopColor="#6b21a8"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="mb-2 font-sans text-2xl font-bold text-[#001a41]">
                                Neurologie
                            </h3>

                            <p className="text-lg font-medium text-slate-500">
                                médecins
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
