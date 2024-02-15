import axios from 'axios';
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(response => {
                setData(response.data);
                setLoading(false);
            });
    }, []);

    return { data, loading };
}

export default useFetch;