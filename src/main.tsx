import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './Modules/LayoutModule/App.tsx'
import {HashRouter} from "react-router";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <HashRouter children={<App/>}/>
        </QueryClientProvider>
    </StrictMode>,
)
