import { useEffect, useRef, useState } from "react";

export const useFetch = (url, options = {}) => {
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({ loading: true, data: null, error: null });
        console.log(url, options);
        fetch(url, options)
            .then((resp) => {
                console.log(resp);
                return resp.json();
            })
            .then((data) => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data,
                    });
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: "No se pudo cargar la información",
                });
            });
    }, [url]);

    return state;
};
