import React from 'react';
import Search from './js/components/Search';
import MainLayout from './js/layouts/main';
import '/src/css/app.css';
import Footer from './js/layouts/footer';
import gsap from 'gsap';

export default function App(){

    return (
        <React.StrictMode>
        <MainLayout>
            <Search />
            
        </MainLayout>
        <Footer/>
        
        
    </React.StrictMode>
    )
}
    

