"use client";

import React, { useState, useEffect } from 'react'
import Section from './Section'
import { Button } from '@/components/ui/button';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className='sticky top-0 py-4'>
            <Section className=' flex items-center justify-between'>
                <h1 className='text-lg font-bold '>adgclvs.com</h1>
                    <Button className="rounded-md" onClick={toggleDarkMode}>
                        {darkMode ? <SunIcon size={32}/> : <MoonIcon size={12}/>}
                    </Button>
            </Section>
        </header>
    )
}

export default Header
