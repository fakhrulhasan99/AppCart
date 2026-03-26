import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import ErrorPage from '../errorPage/ErrorPage';
import Home from '../pages/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    }
]);