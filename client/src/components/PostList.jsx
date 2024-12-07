import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import PopupEditForm from './PopupEditForm';

const PostList = () => {
    const [posts, setPosts] = useState([]); // État pour stocker la liste des posts
    const [isEditOpen, setIsEditOpen] = useState(false); // État pour gérer l'ouverture de la modale
    const [postToEdit, setPostToEdit] = useState(null); // État pour stocker les données du post en cours d'édition

    // Chargement des posts depuis le backend lors du premier rendu
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/posts/");
                setPosts(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };
        fetchPosts();
    }, []);

    const togglePopup = () => setIsEditOpen(!isEditOpen);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression des données", error);
        }
    };

    // Ouvrir la fenêtre modale avec le post sélectionné pour l'édition
    const handleEdit = (id) => {
        const post = posts.find((post) => post.id === id);
        if (post) {
            setPostToEdit(post);
            togglePopup();
        }
    };

    // Mettre à jour la liste après un succès dans l'édition
    const handleSave = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts/");
            setPosts(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération après modification", error);
        }
    };

    return (
        <div className='flex items-start space-y-4 flex-col'>
            <h1 className='font-bold text-3xl text-blue-600'>Tous les posts</h1>
            <div className="grid grid-cols-4 gap-6">
                {posts.map(post => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        onDelete={handleDelete}
                        onEdit={() => handleEdit(post.id)} // Passer la logique d'édition avec le bon ID
                    />
                ))}
            </div>

            {/* Intégration de la modale PopupEditForm */}
            <PopupEditForm
                isOpen={isEditOpen}
                togglePopup={togglePopup}
                postToEdit={postToEdit}
                onSave={handleSave}
            />
        </div>
    );
};

export default PostList;
