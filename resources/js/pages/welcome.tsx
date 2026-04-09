import Navbar from '@/composents/home/navbar';
import Section0 from '@/composents/home/section0';
import Section1 from '@/composents/home/section1';
import Section2 from '@/composents/home/section2';
import Section3 from '@/composents/home/section3';
import Footer from '@/composents/home/footer';
import Faq from '@/composents/home/faq';



import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <Navbar/>
                <Section0/>
                <Section1/>
                <Section2/>
                <Section3/>
                <br />
                <Faq/>
                <br />
                <Footer/>
            </div>

        </>
    );
}
