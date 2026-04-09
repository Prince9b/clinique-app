import React from 'react';
import { AuroraText } from '@/components/ui/aurora-text';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { PulsatingButton } from '@/components/ui/pulsating-button';
import { RainbowButton } from '@/components/ui/rainbow-button';

export default function Section0() {
    return (
        <div>
            <div className="hero flex min-h-screen flex-col">
                <div className="hero-content text-center">
                    <div className="flex h-10 w-80 items-center justify-center rounded-4xl bg-green-400">
                        ✦ Plateforme médicale de confiance
                    </div>
                </div>
                <div>
                    <h1 className="mt-4 text-center text-6xl px-4 font-bold text-green-500 md:text-7xl">
                        <AuroraText
                            colors={[
                                '#10b981',
                                '#059669',
                                '#34d399',
                                '#064e3b',
                                '#6ee7b7',
                            ]}
                        >
                            Simplifiez votre santé,
                        </AuroraText>
                        <p className="text-black">réservez en ligne</p>
                    </h1>
                    <div className="hidden md:block">
                        <TypingAnimation>
                            Trouvez le bon spécialiste, réservez en toute
                            confidentialité, et recevez une confirmation
                            instantanée — sans attente, sans stress.
                        </TypingAnimation>
                    </div>
                    <br />
                    <div className="flex justify-between p-4 md:p-0 gap-2">
                        <div className="group relative flex h-13 w-44 items-center justify-center overflow-hidden rounded-2xl bg-emerald-500 font-sans shadow-lg transition-all hover:bg-emerald-600 hover:shadow-emerald-200 md:h-16 md:w-80">
                            <div className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                            <button className="relative text-sm font-semibold tracking-wide text-white md:text-xl">
                                Prendre rendez-vous
                            </button>
                        </div>
                        <div className="group relative flex h-14 w-52 items-center justify-center overflow-hidden rounded-2xl border border-emerald-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100 md:h-16 md:w-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/0 via-emerald-50/30 to-emerald-50/0 opacity-0 transition-opacity group-hover:opacity-100" />

                            <button className="relative font-sans text-sm font-bold tracking-tight md:text-xl">
                                <AuroraText
                                    colors={[
                                        '#10b981',
                                        '#059669',
                                        '#34d399',
                                        '#064e3b',
                                        '#6ee7b7',
                                    ]}
                                >
                                    Découvrir les spécialistes
                                </AuroraText>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 py-12 md:px-12 lg:px-32">
                    <div className="mx-auto grid grid-cols-2 gap-y-10 rounded-[45px] bg-white p-12 shadow-sm md:grid-cols-4 md:gap-x-4">
                        {/* Statistique 1 */}
                        <div className="flex flex-col items-center text-center">
                            <span className="font-serif text-5xl font-bold text-green-400 lg:text-6xl">
                                50k+
                            </span>
                            <span className="mt-2 text-sm font-medium text-slate-500 md:text-base lg:text-lg">
                                Patients satisfaits
                            </span>
                        </div>

                        {/* Statistique 2 */}
                        <div className="flex flex-col items-center border-l-0 border-slate-100 text-center md:border-l">
                            <span className="font-serif text-5xl font-bold text-green-400 lg:text-6xl">
                                120+
                            </span>
                            <span className="mt-2 text-sm font-medium text-slate-500 md:text-base lg:text-lg">
                                Médecins certifiés
                            </span>
                        </div>

                        {/* Statistique 3 */}
                        <div className="flex flex-col items-center border-l-0 border-slate-100 text-center md:border-l">
                            <span className="font-serif text-5xl font-bold text-green-400 lg:text-6xl">
                                98%
                            </span>
                            <span className="mt-2 text-sm font-medium text-slate-500 md:text-base lg:text-lg">
                                Taux de satisfaction
                            </span>
                        </div>

                        {/* Statistique 4 */}
                        <div className="flex flex-col items-center border-l-0 border-slate-100 text-center md:border-l">
                            <span className="font-serif text-5xl font-bold text-green-400 lg:text-6xl">
                                24h
                            </span>
                            <span className="mt-2 text-sm font-medium text-slate-500 md:text-base lg:text-lg">
                                Support disponible
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
