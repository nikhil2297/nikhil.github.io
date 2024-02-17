"use client";
import React, { createContext, useContext } from 'react'
import { links } from '@/lib/data';

export type SectionName = typeof links[number]['name'];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeLastClicked: number;
    setTimeLastClicked: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children} : ActiveSectionContextProviderProps ) {
    
    const [activeSection, setActiveSection] = React.useState<SectionName>('About');  
    const [timeLastClicked, setTimeLastClicked] = React.useState<number>(0);

    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeLastClicked,
        setTimeLastClicked,
    }}>{children}</ActiveSectionContext.Provider> ;
}


export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (!context) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }

    
    return context;
}
