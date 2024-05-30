import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class books {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;

    @Column()
    nameOfBook: string;

    @DeleteDateColumn()
    deleteAt: Date;

}
