import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import ErrorPage from '../errorPage/ErrorPage';
import Home from '../pages/Home';
import AllApps from '../pages/AllApps';
import AppDetails from '../pages/AppDetails';
import InstallationPage from '../pages/InstallationPage';
import AppErrorPage from '../errorPage/AppErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home,
                loader: async () => {
                    await new Promise(res => setTimeout(res, 300));
                    return fetch("/appsData.json").then(res => res.json());
                },
            },
            {
                path: "/apps",
                Component: AllApps,
                loader: () => fetch("appsData.json").then(res => res.json())
                // loader: async () => {
                //     await new Promise(res => setTimeout(res, 300)); // fake delay
                //     return fetch("/appsData.json").then(res => res.json());
                // }

            },
            {
                path: "/installation",
                Component: InstallationPage,
            },
            {
                path: "/apps/:id",
                loader: () => fetch("/appsData.json").then(res => res.json()),
                Component: AppDetails,
                errorElement: <AppErrorPage />
            }
        ]
    }
]);