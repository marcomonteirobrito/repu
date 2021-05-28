import { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext()

export function ProfileProvider({ children }) {
    const [user, setUser] = useState([])

    return (
        <ProfileContext.Provider
        value={{
            user
        }}>
            {children}
        </ProfileContext.Provider>
    )
}