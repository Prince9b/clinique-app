import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function Section3() {
    return (
        <div className='p-10'>
             <section className="flex min-h-[600px] w-full flex-col overflow-hidden rounded-[45px] bg-white shadow-2xl lg:flex-row">
                <div className="flex w-full flex-col justify-center bg-gradient-to-br from-[#087b94] via-[#0e8ca5] to-[#129fb1] p-10 text-white md:p-16 lg:w-1/2">
                    <h2 className="mb-6 font-serif text-4xl leading-tight font-bold md:text-5xl">
                        Prenez rendez-vous dès aujourd'hui
                    </h2>
                    <p className="mb-10 max-w-md text-lg opacity-90">
                        Accédez aux meilleurs spécialistes de votre région en
                        quelques clics. Simple, rapide, confidentiel.
                    </p>

                    <ul className="space-y-4">
                        {[
                            'Disponible 24h/24, 7j/7',
                            'Confirmation immédiate par SMS & email',
                            "Annulation gratuite jusqu'à 24h avant",
                            'Aucun frais de réservation',
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-sm font-medium md:text-base"
                            >
                                <ArrowRight className="h-4 w-4 text-emerald-300" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-full flex-col justify-center bg-white p-10 md:p-16 lg:w-1/2">
                    <h3 className="mb-8 font-serif text-3xl font-bold text-[#001a41]">
                        Réserver une consultation
                    </h3>

                    <form
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Prénom & Nom
                                </label>
                                <input
                                    type="text"
                                    placeholder="Sophie Martin"
                                    className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="vous@email.com"
                                    className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-slate-700">
                                Spécialité
                            </label>
                            <select className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition outline-none focus:ring-2 focus:ring-emerald-400">
                                <option>Choisissez une spécialité</option>
                                <option>Cardiologie</option>
                                <option>Dentiste</option>
                                <option>Pédiatrie</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Date souhaitée
                                </label>
                                <input
                                    type="date"
                                    className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Heure préférée
                                </label>
                                <select className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition outline-none focus:ring-2 focus:ring-emerald-400">
                                    <option>Sélectionner</option>
                                    <option>09:00</option>
                                    <option>10:30</option>
                                    <option>14:00</option>
                                </select>
                            </div>
                        </div>

                        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1b88e5] to-[#12b39d] py-4 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-xl">
                            Confirmer le rendez-vous
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
