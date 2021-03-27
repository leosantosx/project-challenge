import Modal from 'react-modal';
import { useUsers } from '../../hooks/useUsers';
import { api } from '../../service/api';

import { Container } from './style';

import closeImg from '../../assets/close.svg';
import { FormEvent } from 'react';

type EditUserModalProps = {
    id: string
    onCloseEditUserModal: () => void;
    isOpen: boolean;
}
export function EditUserModal({ id, onCloseEditUserModal, isOpen }: EditUserModalProps){

    const { users, setUsers } = useUsers();

    const user = users.filter(user => user.id == id);
    console.log(user);
     

    async function handleEditUser(event: FormEvent){
        event.preventDefault();

        const { id, firstName, lastName, email, age } = user[0];

        api.put(`/users/${id}`, {
            firstName,
            lastName,
            email,
            age,
        });

        const filteredUsers = users.filter(user => user.id !== id);
        setUsers([...filteredUsers, {
            id,
            firstName,
            lastName,
            email,
            age,
        }])
      
        onCloseEditUserModal();
    }
    
    return(
        <Modal
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                className="react-modal-close"
                onClick={onCloseEditUserModal}
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>

            {user[0] &&
                <Container onSubmit={handleEditUser}>
                    <h2>Editar usuário</h2>

                    <input 
                        required 
                        type="text" 
                        defaultValue={user[0].firstName}
                        onChange={e => user[0].firstName = e.target.value}
                    />

                    <input 
                        required 
                        type="text" 
                        defaultValue={user[0].lastName}
                        onChange={e => user[0].lastName = e.target.value}
                    />

                    <input 
                        required 
                        type="email" 
                        defaultValue={user[0].email}
                        onChange={e => user[0].email = e.target.value}
                    />

                    <input 
                        required 
                        type="number" 
                        defaultValue={user[0].age}
                        onChange={e => user[0].age = e.target.value}
                    />

                    <button>Atualizar</button>

                </Container>
            }

        </Modal>
    )
}