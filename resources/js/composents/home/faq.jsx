import { AuroraText } from '@/components/ui/aurora-text';
import React from 'react';

export default function Faq() {
    return (
        <div className="px-10">
            <div className="text-center">
                <h1 className="text- font-semibold tracking-wide uppercase">
                    <AuroraText
                        colors={[
                            '#10b981',
                            '#059669',
                            '#34d399',
                            '#064e3b',
                            '#6ee7b7',
                        ]}
                    >
                        Questions fréquentes
                    </AuroraText>
                </h1>
                <p className="mt-3 font-serif text-2xl md:text-4xl tracking-tight italic">
                    Vous avez des questions ?
                </p>
                <h3 className="mt-3 text-sm">
                    Retrouvez les réponses aux interrogations les plus courantes.
                </h3>
            </div>
            <details
                className="collapse mt-5 border border-base-300"
                name="my-accordion-det-1"
                open
            >
                <summary className="collapse-title font-semibold">
                    Mes données médicales sont elles sécurisées ?
                </summary>
                <div className="collapse-content text-sm">
                    Absolument. Toutes vos données sont chiffrées de bout en
                    bout et hébergées sur des serveurs certifiés HDS
                    (Hébergement de Données de Santé). Nous sommes conformes au
                    RGPD et n'exploitons jamais vos informations à des fins
                    commerciales.
                </div>
            </details>
            <details
                className="collapse mt-3 border border-base-300"
                name="my-accordion-det-1"
            >
                <summary className="collapse-title font-semibold">
                    Puis je annuler ou reporter un rendez-vous ?
                </summary>
                <div className="collapse-content text-sm">
                    Oui, vous pouvez annuler ou modifier un rendez-vous jusqu'à
                    24h avant depuis votre espace patient. En cas d'urgence, il
                    vous suffit de contacter directement le cabinet médical.
                </div>
            </details>
            <details
                className="collapse mt-3 border border-base-300"
                name="my-accordion-det-1"
            >
                <summary className="collapse-title font-semibold">
                    How do I update my profile information?
                </summary>
                <div className="collapse-content text-sm">
                    Go to "My Account" settings and select "Edit Profile" to
                    make changes.
                </div>
            </details>
            <details
                className="collapse mt-3 border border-base-300"
                name="my-accordion-det-1"
            >
                <summary className="collapse-title font-semibold">
                    How do I update my profile information?
                </summary>
                <div className="collapse-content text-sm">
                    Go to "My Account" settings and select "Edit Profile" to
                    make changes.
                </div>
            </details>
        </div>
    );
}
