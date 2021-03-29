import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import { api } from '../service/api';

type UsersData = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: string;
}

type UserInput = Omit<UsersData, 'id'>

type ContextProviderProps = {
    children: ReactNode;
}

type UsersContextData = {
    users: UsersData[];
    setUsers: Dispatch<React.SetStateAction<UsersData[]>>;
    createUser: (users: UserInput ) => void;
}

const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
);

export function UsersProvider({ children }: ContextProviderProps){
    const [users, setUsers] = useState<UsersData[]>([]);

    useEffect(() => {
        api.get('users')
        .then(response => setUsers(response.data));
    }, []);

    async function createUser(user: UserInput){
        const response = await api.post('users', user);
        setUsers([...users, response.data])
    }

    console.log(users);
    

    return(
        <UsersContext.Provider value={{
            users,
            setUsers,
            createUser,
        }}>
            {children}
        </UsersContext.Provider>

    )
}

export function useUsers(){
    const context = useContext(UsersContext);
    return context;
}