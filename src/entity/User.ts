import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column()
    studentId?: number;

    @Column()
    contact?: string;

    @Column()
    birthDate?: string;
}
