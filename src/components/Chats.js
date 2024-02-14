import React from "react";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from "react-chat-engine";
import  { auth } from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-bar"> 
                    Connex
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>

            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="92ad1b68-a0a4-47d8-ac62-816defc5efd0"
                userName="."
                userSecret="."
            
            />
        </div>
    );
}
    
export default Chats;