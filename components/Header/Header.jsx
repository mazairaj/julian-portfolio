import Link from "next/link";
import Image from "next/image";
import { Button } from '../ui/button'

import Nav from "../Nav/Nav";
import MobileNav from "../Nav/MobileNav";

export default function Header() {

    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Julian <span className="text-accent">.</span>
                    </h1>
                        {/* <div style={{ height: '150px', width: 'auto', position: 'relative' }}>
                            <Image 
                            src="/assets/white-signature.svg"
                            alt="Logo" 
                            layout="fill" 
                            objectFit="contain"
                            />
                        </div>
                        <span className="text-accent">.</span> */}
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
  