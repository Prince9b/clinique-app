import { useForm, usePage } from '@inertiajs/react';
import React from 'react';

export default function Navbar() {
    const { auth } = usePage().props;
    const {post} = useForm()
    const user = auth.user;
    const logout = (e) => {
        e.preventDefault()
        post('/logout')
    }

    return (
        <nav className="sticky top-0 z-50 md:px-33 md:py-5">
            <div className="navbar bg-green-400 shadow-sm md:rounded-3xl">
                <div className="navbar-start text-black">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{' '}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn text-xl btn-ghost">Clinik Digital</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1 text-xl text-white tracking-wide">
                        <li>
                            <a href='/'>Accueilsh</a>
                        </li>
                        <li>
                            <a href='/map'>Maps</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div>{} <button onClick={logout} className='btn border-white bg-transparent text-black'>Logout</button></div>
                    ) : (
                        <a
                            href="/register"
                            className="btn border-black bg-transparent text-black"
                        >
                            Connexion
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}
