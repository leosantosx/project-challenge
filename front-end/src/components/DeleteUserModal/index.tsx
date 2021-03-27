import Modal from 'react-modal';
import { useUsers } from '../../hooks/useUsers';
import { api } from '../../service/api';

import { Container } from './style';


type DeleteUserModalProps = {
    id: string
    onCloseDeleteUserModal: () => void;
    isOpen: boolean;
}
export function DeleteUserModal({ id, onCloseDeleteUserModal, isOpen }: DeleteUserModalProps){

    const { users, setUsers } = useUsers();

    function handleDeleteUser(){
        
        api.delete(`/users/${id}`)
        .then(response => console.log(response.data));

        const filteredUsers = users.filter(
            user => user.id !== id
        );

        setUsers(filteredUsers);
      
        onCloseDeleteUserModal();
    }
    
    return(
        <Modal
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

        <Container>
            <h2>Deseja deletar esse usuário?</h2>


            <div>
                <button
                    className="cancel"
                    onClick={onCloseDeleteUserModal}
                >
                    Cancelar
                </button>

                <button
                    className="delete"
                    onClick={handleDeleteUser}
                >
                    Deletar
                </button>
            </div>
        </Container>

        </Modal>
    )
}