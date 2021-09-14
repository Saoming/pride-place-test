import { useState, useEffect } from "react";

export const useFetch = (uri_posts, uri_users) => {
    const [state, setState] = useState({
        posts: null,
        users: null,
        loading: true
    });

    useEffect(() => {
        setState(
            state => ({
                posts: state.posts,
                users: state.users,
                loading: true
            }));

        const allPromise = Promise.all([
                fetch(uri_posts),
                fetch(uri_users)
            ])
            .then(async(values) => {

                const value1 = await values[0].json();
                const value2 = await values[1].json();
                setState({ posts: value1, users: value2, loading: false})

            })
            .catch(error => {
                console.error(error.message)
                setState( s => ({
                    ...s,
                    loading: false
                }));
            });

    }, [uri_posts, uri_users])

    return state;
}

