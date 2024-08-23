
import { useEffect, useState } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/posts/")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
