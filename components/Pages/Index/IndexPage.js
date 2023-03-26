import PostList from "@/components/Common/PostList/PostList";
import { GLOBAL } from "@/GLOBAL";
import { useAuth } from "@/hooks/useAuth";
import useFetchPosts from "@/hooks/useFetchPosts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IndexContainer } from "./IndexPage.styled";
import New from "./New/New";

const IndexPage = ({initialFollowing}) => {
    const {user} = useAuth({middleware: 'guest'});
    const router = useRouter();
    const [onlyFollowing, setOnlyFollowing] = useState(initialFollowing);
    const {postObjects, isLoading, error, refreshList, addToPostObjects} = useFetchPosts({onlyFollowing, router});
    const toggleFollowing = async() =>{
        setOnlyFollowing(!onlyFollowing);
        router.push({
            pathname: '/',
            query: {
                following: !onlyFollowing
            }
        }, undefined, {shallow: true})
    }
    // check initial url params
    useEffect(()=>{
        const {following} = router.query;
        if(following==='true'){
            setOnlyFollowing(true);
        }else{
            setOnlyFollowing(false);
        }
    }, [router.query])
    return (
        <IndexContainer className="center">
            <div className="indexInner">
                <div className="postsOuter">
                    <div className="typeSelect">
                        <button className={`all selected-${!onlyFollowing}`} onClick={toggleFollowing} >
                            <span>All Posts</span>
                        </button>
                        {(
                            user
                            ? (
                                <button className={`true selected-${onlyFollowing}`} onClick={toggleFollowing}>
                                <span>Following</span>
                            </button>
                            )
                            : null
                        )}
                    </div>
                    {
                        !user
                        ? (
                            <div className="newOuter">
                                <New uploadToURL={'/api/post/create'} addToList={addToPostObjects} loggedIn={false}/>
                            </div>
                        )
                        : (
                            <div className="newOuter">
                                <New uploadToURL={'/api/post/create'} addToList={addToPostObjects} loggedIn={true}/>
                            </div>
                        )
                    }
                    <PostList postObjects={postObjects} isLoading={isLoading} />
                </div>
            </div>
        </IndexContainer>
    );
}

export default IndexPage;