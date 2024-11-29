import React, { useState } from "react";
import axios from "axios"

const PopupForm = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [title, setTitle] = useState(""); 
    const [content, setContent] = useState("");  

    // Fonction pour ouvrir/fermer la fenêtre contextuelle
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/posts/", {
                title,
                content
            });
            console.log("Post ajouté :", { title, content });
            // Réinitialiser les champs et fermer la fenêtre
            setTitle("");
            setContent("");
            togglePopup();
        } catch (error) {
            console.error("Erreur lors de l'ajout du post :", error);
        }
    };

    return (
        <div className="flex items-center justify-center">
            {/* Bouton pour ouvrir la fenêtre */}
            <button
                onClick={togglePopup}
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            >
                Nouveau post
            </button>

            {/* Fenêtre contextuelle */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-4 text-xl font-bold text-gray-800">
                            Remplissez le formulaire
                        </h2>

                        {/* Formulaire */}
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
                                    value={title} // Liaison avec l'état
                                    onChange={(e) => setTitle(e.target.value)} // Mise à jour de l'état
                                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Le titre du post"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    value={content} // Liaison avec l'état
                                    onChange={(e) => setContent(e.target.value)} // Mise à jour de l'état
                                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="La description"
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={togglePopup}
                                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                >
                                    Ajouter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupForm;
