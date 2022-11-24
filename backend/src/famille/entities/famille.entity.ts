import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class Famille {
    @PrimaryColumn()
    @Generated('uuid')
    readonly id:string

    @Column({nullable: false})
    readonly label:string
}
