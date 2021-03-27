import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { useUsers } from '../../hooks/useUsers';

import { Container } from './style';

Modal.setAppElement('#root')

type NewUserModalProps = {
    onCloseNewUserModal: () => void;
    isOpen: boolean;
}

export function NewUserModal({ onCloseNewUserModal, isOpen }: NewUserModalProps){

    const { createUser } = useUsers();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    function handleCreateUser(event: FormEvent){
        event.preventDefault();
        
        createUser({
            firstName,
            lastName,
            email,
            age,
        });

        onCloseNewUserModal();

    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onCloseNewUserModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                className="react-modal-close"
                onClick={onCloseNewUserModal}
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>

            <Container onSubmit={handleCreateUser}>
                <h2>Cadastrar novo usuário</h2>
            
                <input 
                    required 
                    type="text" 
                    placeholder="Nome"
                    onChange={e => setFirstName(e.target.value)}
                />

                <input 
                    required 
                    type="text" 
                    placeholder="Sobrenome"
                    onChange={e => setLastName(e.target.value)}
                />

                <input 
                    required 
                    type="email" 
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />

                <input 
                    required 
                    type="number" 
                    placeholder="Idade"
                    onChange={e => setAge(e.target.value)}
                />

                <button>Cadastrar</button>

            </Container>
        </Modal>
    )
}