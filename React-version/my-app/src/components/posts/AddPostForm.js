import React, { useState } from 'react'

export const AddPostForm = ({dispatch}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch({type: "POST_ADDED", payload: {title, content}});
            setTitle('');
            setContent('');
        }
    }

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    return (
        <section>
            <h2>Add a New Post</h2>
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
                        onChange={onContentChanged}
                    />
                    <button type="button" onClick={() => onSavePostClicked()}>Save Post</button>
                </section>
            </form>
        </section>
    )
}