import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './js/components/Search';
import MainLayout from './js/layouts/main';
import '/src/css/app.css';
import gsap from 'gsap';

export default function App(){

    return (
        <React.StrictMode>
        <MainLayout>
            <Search />
        </MainLayout>
    </React.StrictMode>
    )
}
    

