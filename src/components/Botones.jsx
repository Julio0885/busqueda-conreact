import React from 'react'
import { useState } from 'react'

export default function Botones({ onSearch }) {
    
    const handleButtonClick = (query) => {
        // Aquí puedes manejar el evento de clic del botón
        console.log(`Botón ${query} clicado`);
        onSearch(query); // Llama a la función onSearch con el valor del botón
    }
    return (
        <div className='flex mx-auto justify-center gap-4'>
            <button 
            className='bg-blue-950 rounded-md w-20 h-10 md:w-30 md:15 cursor-pointer  text-white'
            onClick={() => handleButtonClick('Mountain')}
            >Mountain</button>
            <button 
            className='bg-blue-950 rounded-md w-20 h-10 md:w-30 md:15 cursor-pointer text-white'
            onClick={() => handleButtonClick('Beaches')}
            >Beaches</button>
            <button 
            className='bg-blue-950 rounded-md w-20 h-10 md:w-30 md:15 cursor-pointer text-white'
            onClick={() => handleButtonClick('Birds')}
            >Birds</button>
            <button 
            className='bg-blue-950 rounded-md w-20 h-10 md:w-30 md:15 cursor-pointer text-white'
            onClick={() => handleButtonClick('Food')}
            >Food</button>
        </div>
    )
}
