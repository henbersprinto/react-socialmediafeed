import React from 'react'
import { Link, useParams } from 'react-router-dom'


export const DeletePostPage = ({ posts, dispatch }) => {
    const { postId } = useParams();

    const post = posts.find(post => post.id === postId);

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <h1>Are you sure you want to delete this post?</h1>
            <Link to={"/"} className="button muted-button" onClick={() => dispatch({type: "POST_DELETE", payload: { postId }})}>
                Yes
            </Link>
            <Link to={`/posts/${post.id}`} className="button muted-button">
                No
            </Link>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}