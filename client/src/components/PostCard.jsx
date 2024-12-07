import React from 'react'

const PostCard = ({ title, content, onEdit, onDelete, id}) => {
    return (
        <div className='flex flex-col justify-center items-start border-blue-300 border px-3 py-5 space-y-5 rounded-md'>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p className='text-md w-full'>{content}</p>
            <div className='flex space-x-3 justify-center'>
                <button
                    className='self-end bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
                    onClick={() => onEdit(id)}
                >
                    Modifier
                </button>
                <button
                    className='self-end bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-700 transition'
                    onClick={() => onDelete(id)}
                >
                    Supprimer
                </button>
            </div>
        </div>
    )
}

export default PostCard