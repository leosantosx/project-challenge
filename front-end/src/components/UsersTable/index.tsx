import { useState } from 'react';

import { Container } from './style';

import { DeleteUserModal } from '../DeleteUserModal'
import { EditUserModal } from '../EditUserModal'

import { useUsers } from '../../hooks/useUsers';

import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';

export function UsersTable(){

    const { users } = useUsers()

    const [isOpenModalDeleteUser, setIsOpenModalDeleteUser] = useState(false);
    const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false);
    const [currentId, setCurrentId] = useState(''); 

    function handleDeleteUserModalClose(){
        setIsOpenModalDeleteUser(false);
    }

    function handleEditUserModalClose(){
        setIsOpenModalEditUser(false);
    }
    
    return (
        <Container>

            <DeleteUserModal 
                id={currentId}
                isOpen={isOpenModalDeleteUser}
                onCloseDeleteUserModal={handleDeleteUserModalClose}
            />

            <EditUserModal 
                id={currentId}
                isOpen={isOpenModalEditUser}
                onCloseEditUserModal={handleEditUserModalClose}
            />

            {users.length === 0 ?
                <p>Você não tem nenhum usuário cadastrado.</p>
            :

                <table>
                    <thead>
                        <tr>
                            <th>Nome completo</th>
                            <th>E-mail</th>
                            <th>Idade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setCurrentId(user.id);
                                            setIsOpenModalEditUser(true);
                                        }}
                                    >
                                        <img 
                                            className="edit"
                                            src={editImg} 
                                            alt="Icon Edit"
                                        />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setCurrentId(user.id);
                                            setIsOpenModalDeleteUser(true);
                                        }}
                                    >
                                        <img 
                                            className="delete" 
                                            src={deleteImg} 
                                            alt="Icon delete"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            }
        </Container>
    )
}