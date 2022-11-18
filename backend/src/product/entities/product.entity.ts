import { Rate } from "src/rate/entities/rate.entity";
import { Column, Entity, Generated, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryColumn('uuid')
    @Generated('uuid')
    readonly id: string;

    @Column({nullable: false, unique: true})
    readonly name: string;

    @Column({nullable: false, type:"float"})
    readonly price: number;
    
    @OneToMany(() => Rate, (rate: Rate) => rate.product, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    rates: Rate[]
}