import { Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

export abstract class CartAbstract {
    @PrimaryColumn({default:'' + Math.floor(Math.random() * 1000000000)})
    id: string
    @Column({default:0})
    month?: number
}