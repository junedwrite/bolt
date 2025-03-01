import { createContext, useContext, useEffect, useState, ReactNode, useRef } from "react"; 
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

interface ApiContextType {
    data: any;
    loading: boolean;
    error: string | null;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const queryParams = new URLSearchParams(location.search);
    const propertyId = queryParams.get("id"); // Get 'id' from the URL query
    console.log('propertyId:', propertyId);

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef(false); // Track if API was already called

    useEffect(() => {
        if (hasFetched.current) return; // Prevent multiple API calls
        hasFetched.current = true; // Mark as called

        if (!propertyId) {
            setLoading(false); // Remove loader
            navigate("/listings"); // Redirect if no propertyId
            return;
        }

        const API_URL = `https://nester.studio/property/upscale/${propertyId}`;
        // const API_URL = `https://know.dayrade.com/property/upscale/${propertyId}`;
        // const API_URL = `http://localhost:5000/property/upscale/${propertyId}`;

        axios.get(API_URL)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [propertyId, navigate]); // Added dependencies

    return (
        <ApiContext.Provider value={{ data, loading, error }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error("useApi must be used within an ApiProvider");
    }
    return context;
};
