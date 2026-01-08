import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    setVideoLoaded: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [minTimeElapsed, setMinTimeElapsed] = useState(false);

    useEffect(() => {
        // Minimum display time for loader (e.g., 2s) to prevent flashing users
        const timer = setTimeout(() => {
            setMinTimeElapsed(true);
        }, 2000);

        // Fallback timeout (e.g., 8s) in case video never loads
        const fallbackTimer = setTimeout(() => {
            if (!isVideoLoaded) {
                console.warn("Video load timeout - forcing loader dismissal");
                setIsVideoLoaded(true);
            }
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearTimeout(fallbackTimer);
        };
    }, [isVideoLoaded]);

    useEffect(() => {
        if (isVideoLoaded && minTimeElapsed) {
            setIsLoading(false);
        }
    }, [isVideoLoaded, minTimeElapsed]);

    return (
        <LoadingContext.Provider value={{ isLoading, setVideoLoaded: () => setIsVideoLoaded(true) }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
