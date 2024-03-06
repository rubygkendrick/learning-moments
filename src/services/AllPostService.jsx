export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=topic&_embed=postLikes").then((res) => res.json())
}

export const getAllTopics = () => {
    return fetch("http://localhost:8088/topics").then((res) => res.json())
}

export const getPostDetailsByPostId= (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}?_expand=user&&_expand=topic&&_embed=postLikes`).then((res) => res.json())
}


export const postAnewLike = (like) => {
    return fetch(`http://localhost:8088/postLikes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(like),
    })
}

export const deleteLike = (likeId) => {
    return fetch(`http://localhost:8088/postLikes/${likeId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",

        },
    })
}