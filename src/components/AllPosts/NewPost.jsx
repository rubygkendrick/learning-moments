import { useState, useEffect } from "react"
import "./NewPost.css"
import { getAllTopics, postNewPost } from "../../services/AllPostService"






export const NewPost = () => {
    const [allTopics, setAllTopics] = useState([])
    const [currentTopic, setCurrentTopic] = useState(0)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [user, setCurrentUser] = useState({})
  


    useEffect(() => {
        const learningUserJSON = localStorage.getItem("learning_user")
        const learningUser = JSON.parse(learningUserJSON)
        setCurrentUser(learningUser) 
    }, [])

    useEffect(() => {
        getAllTopics().then(allTopicsArray => {
            setAllTopics(allTopicsArray)
        })
    }, [])

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTopicChange = (event) => {
        const selectedTopicId = event.target.value
        const selectedTopic = allTopics.find(topic => topic.id == selectedTopicId)
        setCurrentTopic(selectedTopic.id)
    }

    const handlePostBodyChange = (event) => {
        setBody(event.target.value)
    }

    const handleNewPostSave = () => {
        ///if all my input fields are filled out
        if (title !== "" && body !== "" && currentTopic !== 0) {
        const postObject = {
            title: title,
            body: body,
            date: new Date(),
            userId: user.id,
            topicId: currentTopic
        }

        postNewPost(postObject) 
    } else {
        window.alert( "All fields required")
    }

    }

    return (
        <form className="newPost">
            <h2 className="pageTitle">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label></label>
                    <input type="text"
                        placeholder="Title"
                        value={title ? title : ""}
                        onChange={handleTitleChange}
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <select  onChange={handleTopicChange} className="form-control">
                        <option value="0">Choose A Topic</option>
                        {allTopics.map(topicObject => (
                            <option  key={topicObject.id} value={topicObject.id}>
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
                        placeholder="Post"
                        value={body ? body : ""}
                        onChange={handlePostBodyChange}
                        className="form-control body-form" />
                </div>
            </fieldset>

            <div className="form-group">
                <button className="form-btn" onClick={handleNewPostSave}>Save Profile</button>
            </div>

        </form>
    )
}