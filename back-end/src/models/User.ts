import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    private id: string

    @Column()
    firstName: string

    @Column()
    lastName: string
    
    @Column()
    email: string

    @Column()
    age: number

}

export default User