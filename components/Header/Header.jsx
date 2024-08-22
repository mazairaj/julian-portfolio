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
                    {/* <img 
                    src="/assets/logos/JulianBuilds_40x40px.svg" 
                    alt="Julian Builds" 
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    /> */}
                {/* <Link href="/">
                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                    <Image 
                        src="/assets/logos/jb_transparent_green.png"
                        alt="Julian Builds"
                        height="100"
                        width="100"
                        // objectFit="contain" // Removed this as it's being applied in the style prop
                        style={{ objectFit: 'contain' }} // Use the appropriate objectFit value
                    />
                </div>
                </Link> */}
                <Link href="/" className="flex gap-6">
                    <Image 
                        src="/assets/logos/julianbuilds_120x120px.png"
                        alt="JB"
                        height="40"
                        width="40"
                        // objectFit="contain" // Removed this as it's being applied in the style prop
                        style={{ objectFit: 'contain' }} // Use the appropriate objectFit value
                    />
                    <h1 className="text-4xl font-semibold">
                        Julian <span className="text-accent">.</span>
                    </h1>
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
  