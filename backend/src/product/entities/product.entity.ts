import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryColumn('uuid')
    @Generated('uuid')
    readonly id: string;

    @Column({nullable: false, unique: true})
    readonly name: string;

    @Column({nullable: false, type:"float"})
    readonly price: number;
    

}