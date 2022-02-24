import React from 'react'
import './styles.css'
import { FaShoppingBag } from "react-icons/fa";


export const Header = () => {
  return (
        <header className="header">
            <h1 className="topname">
                Meu Pão
            </h1>
            <button className="bag">
                <FaShoppingBag size={28} color={`var(--tt4)`}/>
            </button>
        </header>
    )
}
