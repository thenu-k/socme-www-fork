import PostList from "@/components/Common/PostList/PostList";
import { GLOBAL } from "@/GLOBAL";
import { useAuth } from "@/hooks/useAuth";
import useFetchPosts from "@/hooks/useFetchPosts";
import { useEffect, useState } from "react";
import { IndexContainer } from "./IndexPage.styled";

const IndexPage = () => {
    const [onlyFollowing, setOnlyFollowing] = useState(false);
    const {postObjects, isLoading, error} = useFetchPosts({onlyFollowing});
    const {user} = useAuth({middleware: 'guest'});
    return (
        <IndexContainer className="center">
            <div className="indexInner">
                <div className="postsOuter">
                    <div className="typeSelect">
                        <button className={`all selected-${!onlyFollowing}`} onClick={() => setOnlyFollowing(false)} >
                            <span>All Posts</span>
                        </button>
                        {(
                            user
                            ? (
                                <button className={`true selected-${onlyFollowing}`} onClick={() => setOnlyFollowing(true)}>
                                <span>Following</span>
                            </button>
                            )
                            : null
                        )}
                    </div>
                    <PostList postObjects={postObjects} isLoading={isLoading} />
                </div>
            </div>
        </IndexContainer>
    );
}

export default IndexPage;