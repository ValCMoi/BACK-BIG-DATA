import { Column, PrimaryGeneratedColumn } from "typeorm"

export abstract class Categorie {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable:false})
    label: string
}