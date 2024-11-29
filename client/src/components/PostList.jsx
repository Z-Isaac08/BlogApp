import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fecthPosts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/posts/");

                setPosts(response.data)
            } catch (error) {
                console.error("Erreur lors de la recupération des données", error)
            }
        }

        fecthPosts()
    }, [posts])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Erreur lors de la supression des données", error)
        }
    }

    return (
        <div className='flex items-start space-y-4 flex-col'>
            <h1 className='font-bold text-3xl text-blue-600'>Tous les posts</h1>
            <div className="grid grid-cols-4 gap-6">
                {posts.map(post => {
                    return <PostCard key={post.id} id={post.id} onDelete={handleDelete} title={post.title} content={post.content} />
                })}
            </div>
        </div>
    )
}

export default PostList