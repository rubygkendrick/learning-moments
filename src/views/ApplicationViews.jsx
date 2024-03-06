import { Route, Routes, Outlet } from "react-router-dom"
import { AllPosts } from "../components/AllPosts/AllPosts"
import { NavBar } from "../components/Nav/NavBar"
import { useState, useEffect } from "react"
import { PostDetails } from "../components/AllPosts/PostDetails"
import { NewPost } from "../components/AllPosts/NewPost"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObject = JSON.parse(localLearningUser)
        setCurrentUser(learningUserObject)
    }, [])


    return <Routes>
        <Route path="/" element={
            <>
                <NavBar />
                <Outlet />
            </>
        }>
            <Route index element={<AllPosts />} />
            <Route path="postDetails/:postId" element={<PostDetails />}></Route>
            <Route path="newPost" element={<NewPost />}></Route>


        </Route>
    </Routes>

}