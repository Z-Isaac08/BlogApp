import React, { useState } from "react";
import axios from "axios";

// Composant pour la modification d'un post existant
const PopupEditForm = ({ isOpen, togglePopup, postToEdit, onSave }) => {
    const [title, setTitle] = useState(postToEdit?.title || "");
    const [content, setContent] = useState(postToEdit?.content || "");

    // Gérer la soumission de l'édition
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Appel PUT pour mettre à jour le post existant
            await axios.put(`http://localhost:8000/posts/${postToEdit.id}`, {
                title,
                content
            });
            console.log("Post mis à jour :", { title, content });
            // Réinitialiser les champs après soumission
            onSave();
            togglePopup();
        } catch (error) {
            console.error("Erreur lors de la mise à jour du post :", error);
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-4 text-xl font-bold text-gray-800">Modifier le post</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Titre
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Le titre du post"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="content"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="La description"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => togglePopup()}
                                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default PopupEditForm;
