import React from 'react'

export const Footer = () => {
    let footerStyle={
        top: "5vh",
        position: "relative",
        bottom:"0",
        width: "100%",
        
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">copyright &#169; MyTodoList.com</p>
        </footer>
    )
}
