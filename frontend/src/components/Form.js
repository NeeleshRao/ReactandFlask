import React, { useState, useEffect } from 'react'
import APIService from './APIService'

function Form(props) {

    const [title, setTitle] = useState(props.article.title)
    const [body, setBody] = useState(props.article.body)

    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)
    }, [props.article])

    const UpdateArticle = () => {

        APIService.UpdateArticle(props.article.id, { title, body })
            .then(resp => props.updatedData(resp))
            .catch(err => console.log(err))
    }
    return (
        <div>
            {props.article ? (
                <div classname="mb-3">
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input type="text" className='form-control' value={title} placeholder='Please enter title' onChange={(e) => setTitle(e.target.value)}></input>

                    <label htmlFor="body" className='form-label'>Description</label>
                    <textarea rows="7" type="text" className='form-control' value={body} placeholder='Please enter text' onChange={(e) => setBody(e.target.value)}></textarea>

                    <button onClick={UpdateArticle} className='btn btn-success mt-3'>Update</button>
                </div>
            ) : null}

        </div>
    )
}

export default Form