import { Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

export abstract class CartAbstract {
    @PrimaryColumn()
    id!: string
    @Column({default:0})
    month?: number
}