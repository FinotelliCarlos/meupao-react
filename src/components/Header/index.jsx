import React from 'react'
import './styles.scss'
import { FaShoppingBag } from "react-icons/fa";
import {useProvider} from '../../contexts/ApiContexts'

export const Header = () => {
    const {user} = useProvider();

  return (
        <header className="header">
            <img className="topname" src='/assets/logo.svg'/>
            <button className="bag">
                <FaShoppingBag size={28} color={`var(--tt4)`}/>
            </button>
        </header>
    )
}
