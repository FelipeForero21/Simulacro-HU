import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sell {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;

    @Column()
    nameOfBook: string;

    @DeleteDateColumn()
    deleteAt: Date;

}
