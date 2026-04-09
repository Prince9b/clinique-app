import { AuroraText } from '@/components/ui/aurora-text';
import React from 'react';

export default function Section1() {
    return (
        <div>
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
                        comment ca marche ?
                    </AuroraText>
                </h1>
                <p className="mt-3 font-serif text-2xl md:text-4xl tracking-tight italic">
                    Votre santé en 3 étapes simples
                </p>
                <h3 className="mt-3 text-sm">
                    Un processus clair, sécurisé et conçu pour vous.
                </h3>
            </div>
            <div className="grid grid-cols-1 px-8 py-5 md:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="badge text-xl badge-xl">01</span>
                        <div className="flex justify-between">
                            <h2 className="font-serif text-xl">
                                Inscription Facile
                            </h2>
                            {/* <span className="text-xl">$29/mo</span> */}
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                Créez votre compte en quelques secondes. Vos
                                données sont protégées par chiffrement et
                                conformes au RGPD.
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Création en moins de 2 min</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Sécurité RGPD garantie</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Accès multi-appareils</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-block bg-green-400">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="badge text-xl badge-xl">02</span>
                        <div className="flex justify-between">
                            <h2 className="font-serif text-xl">Réservation</h2>
                            {/* <span className="text-xl">$29/mo</span> */}
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                Parcourez les spécialistes disponibles sans
                                exposer votre identité. Comparez les créneaux et
                                choisissez ce qui vous convient.
                            </li>

                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Aucune donnée partagée</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Filtres avancés</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Disponibilités en temps réel</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-block bg-green-400">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="badge text-xl badge-xl">03</span>
                        <div className="flex justify-between">
                            <h2 className="font-serif text-xl">
                                Confirmation Instantanée
                            </h2>
                            {/* <span className="text-xl">$29/mo</span> */}
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                Réservez en un clic et recevez immédiatement une
                                confirmation par email et SMS. Rappels
                                automatiques inclus.
                            </li>

                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Confirmation ultra rapide</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Rappels automatiques</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 inline-block size-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Annulation facile jusqu'à J-1</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-block bg-green-400">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
