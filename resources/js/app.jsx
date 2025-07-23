import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './components/Search';
import MainLayout from './layouts/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MainLayout>
            <Search />
        </MainLayout>
    </React.StrictMode>
);
