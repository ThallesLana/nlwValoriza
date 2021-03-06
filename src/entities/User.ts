import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

// aqui é determinado a qual tabela a entidade está relacionada
@Entity("users") 
export class User {

    @PrimaryColumn()
    readonly id: string;;

    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}