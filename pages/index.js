import { Box, Container, Grid, Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react"
import { PosContent } from "./components/postContent";
import { useFetch } from "./components/useFetch";

const Home = () => {
    const uri_posts = 'https://jsonplaceholder.typicode.com/posts';
    const uri_users = 'https://jsonplaceholder.typicode.com/users';
    const { posts, users, loading } = useFetch(uri_posts, uri_users);
    const [truePost, setTruePost] = useState([]);

    useEffect(  () => {
        if ( loading === false) {
            const mergeById = (a1, a2) =>
            a1.map(itm => ({
                ...a2.find((item) => (item.id === itm.userId) && item),
                ...itm
            }));
            // check if the => users and post are merged
            // console.log(mergeById(posts, users));
            setTruePost(mergeById(posts, users));
        }

    }, [posts, users])
    
    return (
        <Container maxW="1440px" py="24">
            <Box py="8">
                <Heading> Pride Place Front End Coding Challenge  </Heading>
            </Box>
            <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }} gap={6}>
                {/* show the true merged post */}
                { !posts && !users ? "loading..." : 
                    truePost.map( (post) => {  
                        return  <PosContent key={post.id}
                                    title={post.title}
                                    paragraph={post.body}
                                    name={post.name}
                                    catchPhrase={post.company.catchPhrase}
                        />
                        }
                    )
                }
            </Grid>
        </Container>
    )
}

export default Home