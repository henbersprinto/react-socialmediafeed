import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postDeleted } from './postsSlice';


export const DeletePostPage = ({ match }) => {
    const { postId } = match.params;

    const dispatch = useDispatch();
    const history = useHistory();
    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    const handleOnYes = () => {
        dispatch(postDeleted(postId));
        history.push("/");
    }

    const handleOnNo = () => {
        history.push(`/posts/${postId}`)
    }

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
            <button type="button" onClick={handleOnYes}>Yes</button>
            <button type="button" onClick={handleOnNo}>No</button>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}