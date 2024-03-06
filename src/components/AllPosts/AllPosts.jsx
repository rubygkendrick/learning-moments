import { useState } from "react"
import "./AllPosts.css"
import { getAllPosts, getAllTopics } from "../../services/AllPostService"
import { useEffect } from "react"
import { AllPostsFilterBar } from "./AllPostsFilterBar"
import { Link } from "react-router-dom"



export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [selectedTopic, setSelectedTopic] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

  

    const fetchAndResetAllPosts = () => {
        getAllPosts().then(allPostsArray => {
            setAllPosts(allPostsArray)

        })
    }

    useEffect(() => {
        fetchAndResetAllPosts()
        getAllTopics().then(allTopicsArray => {
            setAllTopics(allTopicsArray)
        })
    }, [])


    useEffect(() => {
        let topicRelevantPosts = []
        if (selectedTopic === "0") {
            topicRelevantPosts = allPosts
        } else {
            topicRelevantPosts = allPosts.filter(post => post.topic.name.includes(selectedTopic))
        }
        setFilteredPosts(topicRelevantPosts)
    }, [allPosts, selectedTopic])


    useEffect(() => {
        const searchedPosts = allPosts.filter(post =>
            post.title.includes(searchTerm) ||
            post.body.includes(searchTerm) ||
            post.topic.name.includes(searchTerm))

        setFilteredPosts(searchedPosts)
    }, [searchTerm, allPosts])


    return (
        <div className="AllPosts-container">
            <AllPostsFilterBar setSelectedTopic={setSelectedTopic}
                setSearchTerm={setSearchTerm} allTopics={allTopics} />
            {filteredPosts.map(postObject => {
                return (
                    <div className="AllPosts-container-post" key={postObject.id}>
                        <div className="AllPosts-container-post-info">
                           <Link to={`/postDetails/${postObject.id}`}> Title : {postObject.title}</Link>
                        </div>
                        <div className="AllPosts-container-post-info">
                            Topic : {postObject.topic.name}
                        </div>
                        <div className="AllPosts-container-post-info">
                            Likes : {postObject.postLikes.length}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}