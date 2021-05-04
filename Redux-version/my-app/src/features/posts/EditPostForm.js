import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
    const { postId } = match.params;

    const existingPost = useSelector(state =>
        state.posts.find(post => post.id === postId)
    );

    const [title, setTitle] = useState(existingPost.title);
    const [content, setContent] = useState(existingPost.content);

    const dispatch = useDispatch();
    const history = useHistory();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    
    const onSavePostClicked = () => {
        if (title && content) {
            let body = {
                id: postId,
                title: title,
                content: content
            };
            dispatch(postUpdated(body));
            history.push(`/posts/${postId}`);
        }
    }

    return (
        <section>
            <h2>Edit post</h2>
            <form>
                <section>
                    <label htmlFor="postTitle">Post Title: </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />
                </section>
                <br />
                <section>
                    <label htmlFor="postContent">Content: </label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        placeholder="What's on your mind?"
                        onChange={onContentChanged}
                    />
                    <button type="button" onClick={onSavePostClicked}>Save Post</button>
                </section>
            </form>
        </section>
    )
}