import React from 'react'
import Dashboard from './dashboard/Dashboard'
import Orders from './Orders'
import Account from './Account'
import Settings from './Settings'
import Chat from './Chat'
import Faq from './Faq'
import { Routes, Route } from 'react-router-dom'
export default function Layout(props) {
    

    return (
        <>
             <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="chat" element={<Chat />} />
        <Route path="faq" element={<Faq />} />
      </Routes>   
        </>
    )
}
