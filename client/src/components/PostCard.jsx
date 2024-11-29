import React from 'react'

const PostCard = ({ title, content, onDelete, id}) => {
    return (
        <div className='flex flex-col justify-center items-start border-blue-300 border px-3 py-5 space-y-5 rounded-md'>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p className='text-md w-full'>{content}</p>
            <button
                className='self-end bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-700 transition'
                onClick={() => onDelete(id)}
            >
                Supprimer
            </button>
        </div>
    )
}

export default PostCard