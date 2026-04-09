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

export default function Login() {
    const { theme } = useTheme();
    const {flash} = usePage().props
    const { data, setData, post, errors, processing } = useForm({
        tel: '',
        password: '',
    });
    const submit = (e) => {
        e.preventDefault();
        post('/login/store');
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-green-900">
            <Card className="w-full max-w-sm border-none p-0 shadow-none">
                <MagicCard
                    gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
                    className="p-0"
                >
                    <form onSubmit={submit}>
                        {flash?.success && (
                            <div className='alert alert-success'>{flash.success}</div>
                        )}
                        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                            <CardTitle>Connexion</CardTitle>
                            <CardDescription>Vos coordonnees</CardDescription>
                            <CardAction>
                                <Button variant="link">
                                    <Link href="/register">Inscription</Link>
                                </Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="tel">Telephone</Label>
                                    <Input
                                        id="telw"
                                        type="numeric"
                                        value={data.tel}
                                        onChange={(e) =>
                                            setData('tel', e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t border-border p-4 [.border-t]:pt-4">
                            <Button type="submit" className="w-full bg-green-400">
                                M'inscrire
                            </Button>
                        </CardFooter>
                    </form>
                </MagicCard>
            </Card>
        </div>
    );
}
