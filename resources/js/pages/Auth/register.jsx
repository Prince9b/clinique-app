'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardAction,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MagicCard } from '@/components/ui/magic-card';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Register() {
    const { theme } = useTheme();
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        tel: '',
        password: '',
    });
    const { flash } = usePage().props;
    const submit = (e) => {
        e.preventDefault();
        post('/register/store');
    };
    useEffect(() => {
        if (flash?.success) {
            const timer = setTimeout(() => {
                router.visit('/login');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [flash?.success]);
    return (
        <div className="flex min-h-screen items-center justify-center bg-green-900">
            <Card className="w-full max-w-sm border-none p-0 shadow-none">
                <MagicCard
                    gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
                    className="p-0"
                >
                    <form onSubmit={submit}>
                        {flash?.success && (
                            <div className="mx-4 mt-4 rounded-md bg-green-100 px-4 py-3 text-center text-sm font-medium text-green-700">
                                ✅ {flash.success}
                            </div>
                        )}
                        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                            <CardTitle>Inscription</CardTitle>
                            <CardDescription>Vos coordonnees</CardDescription>
                            <CardAction>
                                <Button variant="link">
                                    <Link href="/login">Connexion</Link>
                                </Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Nom complet</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Nom Prenom"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="nom@example.com"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500">
                                         {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="tel">Telephone</Label>
                                    <Input
                                        id="tel"
                                        type="tel"
                                        placeholder="99999999"
                                        value={data.tel}
                                        onChange={(e) =>
                                            setData('tel', e.target.value)
                                        }
                                    />
                                    {errors.tel && (
                                        <p className="text-sm text-red-500">
                                         {errors.tel}
                                        </p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="text"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t border-border p-4 [.border-t]:pt-4">
                            <Button
                                type="submit"
                                className="w-full bg-green-400"
                            >
                                M'inscrire
                            </Button>
                        </CardFooter>
                    </form>
                </MagicCard>
            </Card>
        </div>
    );
}
