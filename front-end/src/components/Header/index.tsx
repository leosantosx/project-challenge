import { Container, Content } from './style';

import userImg from '../../assets/user.svg';

type HeaderProps = {
    onOpenNewUserModal: () => void;
}

export function Header({ onOpenNewUserModal }: HeaderProps){
    return(
       <Container>
           <Content>
                <div>
                    <img src={userImg} alt="icon user"/>
                    <h1>Dashboard</h1>
                </div>

                <button 
                    onClick={onOpenNewUserModal}
                >Novo usuário</button>
           </Content>
       </Container>
    )
}