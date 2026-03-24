import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    setVideoLoaded: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const hasLoadedBefore = sessionStorage.getItem('mrcagro_loaded') === 'true';
    const [isLoading, setIsLoading] = useState(!hasLoadedBefore);
    const [isVideoLoaded, setIsVideoLoaded] = useState(hasLoadedBefore);
    const [minTimeElapsed, setMinTimeElapsed] = useState(hasLoadedBefore);

    useEffect(() => {
        if (hasLoadedBefore) return;

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
    }, [isVideoLoaded, hasLoadedBefore]);

    useEffect(() => {
        if (isVideoLoaded && minTimeElapsed && !hasLoadedBefore) {
            setIsLoading(false);
            sessionStorage.setItem('mrcagro_loaded', 'true');
        }
    }, [isVideoLoaded, minTimeElapsed, hasLoadedBefore]);

    return (
        <LoadingContext.Provider value={{ 
            isLoading, 
            setVideoLoaded: () => {
                if (!hasLoadedBefore) setIsVideoLoaded(true);
            } 
        }}>
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
