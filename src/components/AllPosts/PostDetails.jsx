import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { deleteLike, getPostDetailsByPostId, postAnewLike } from "../../services/AllPostService"


export const PostDetails = () => {

    const { postId } = useParams()
    const [currentPost, setCurrentPost] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    const [liked, setLiked] = useState({})


    useEffect(() => {
        // Check if the current user has already liked the post..
        const isLiked = currentPost.postLikes?.find(postLike => postLike.userId === currentUser.id);
        setLiked(isLiked);
    }, [currentPost, currentUser]);


    useEffect(() => {
        const learningUserJSON = localStorage.getItem("learning_user")
        const learningUser = JSON.parse(learningUserJSON)
        setCurrentUser(learningUser) 
    }, [])

    useEffect(() => {
        getPostDetailsByPostId(postId).then(postDetailsObject => {
            setCurrentPost(postDetailsObject)

        })
    }, [postId])
   
    const handleLike = () => {
         
        if (liked?.userId === currentUser.id) {
            deleteLike(liked.id).then(() => {
                getPostDetailsByPostId(postId).then(postDetailsObject => {
                    setCurrentPost(postDetailsObject)
                })
            })

        } else {
            const newPostLike = {
                userId: currentUser.id,
                postId: currentPost.id
            }

            postAnewLike(newPostLike).then(() => {
                getPostDetailsByPostId(postId).then(postDetailsObject => {
                    setCurrentPost(postDetailsObject)
                })
            })
        }
    }

    return (
        <section className="postDetail">
            <h1 className="postDetail-title">Post :</h1>
            <div className="postDetail-container">
                <header className="postDetail-header">{currentPost.title}</header>
                <div>
                    <span className="postDetail-info">Author: </span>
                    {currentPost.user?.name}
                </div>
                <div>
                    <span className="postDetail-info">Topic: </span>
                    {currentPost.topic?.name}
                </div>
                <div>
                    <span className="postDetail-info">Date :</span>
                    {currentPost.date}
                </div>
                <div>
                    <span className="postDetail-info">Body :</span>
                    {currentPost.body}

                </div>
                <div>
                    <span className="postDetail-info">Likes :</span>
                    {currentPost.postLikes?.length}
                </div>

            </div>
            <div className="postDetail-btn-container">
                {currentUser.id === currentPost.user?.id ?
                    (<button className="postDetails-btn">Edit</button>) : ""}

                {currentUser.id !== currentPost.user?.id ?
                    (<button className="postDetails-btn" onClick={handleLike}>
                        {liked?.userId == currentUser.id ? "Dislike" : "Like"}
                    </button>) : ""}

            </div>
        </section>
    )
}

//if const currentUserId = currentUser.id
//const currentUserPostLike = currentPost.postLikes?.find(postLike => postLike.userId === currentUserId)