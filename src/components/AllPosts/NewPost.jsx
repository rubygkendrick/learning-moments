import { useState, useEffect } from "react"
import "./NewPost.css"
import { getAllTopics } from "../../services/AllPostService"






export const NewPost = () => {
    const [allTopics, setAllTopics] = useState([])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(() => {
        getAllTopics().then(allTopicsArray => {
            setAllTopics(allTopicsArray)
        })
    }, [])



    return (
        <form className="newPost">
            <h2 className="pageTitle">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label></label>
                    <input type="text"
                        defaultValue="Title"
                        name="specialty"
                        required className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <select defaultValue="" className="form-control">
                        <option value="0" >Choose A Topic</option>
                        {allTopics.map(topicObject => (
                            <option key={topicObject.id} value={topicObject.name} >
                                {topicObject.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label></label>
                    <input type="text"
                        defaultValue="Post"
                        name="body"
                        required className="form-control body-form" />
                </div>
            </fieldset>

            <div className="form-group">
                <button className="form-btn">Save Profile</button>
            </div>

        </form>
    )
}