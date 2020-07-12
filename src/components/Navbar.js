import React from 'react'


export const Navbar = () => {
    const style = {
        
        backgroundColor: 'purple'
    }
/*
    const handleClick = () => {
        console.log('button clicked');
        alert(<Modal />);
    }
*/
    return (
        <div style= {style} className="container m-auto text-light text-center h1 border">
            <p className='h1 font-weight-bolder mt-4 mb-2 text-center'>BOOKSHOP</p>       
        </div>
    )
}
