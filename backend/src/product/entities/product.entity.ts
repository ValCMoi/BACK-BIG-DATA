import { Categorie } from "src/abstract/categorie";
import { Cart } from "src/cart/entities/cart.entity";
import { Famille } from "src/famille/entities/famille.entity";
import { Maille } from "src/maille/entities/maille.entity";
import { Rate } from "src/rate/entities/rate.entity";
import { Univer } from "src/univers/entities/univer.entity";
import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryColumn('uuid')
    @Generated('uuid')
    readonly id: string;

    @Column({nullable: false, unique: true})
    name: string;

    @Column({nullable: false, type:"float"})
    price: number;
    
    @OneToMany(() => Rate, (rate: Rate) => rate.product, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    rates: Rate[]

    @ManyToOne(() => Famille, (famille: Famille) => famille.products)
    famille: Famille

    @ManyToOne(() => Univer, (univers: Univer) => univers.products)
    univers: Univer

    @ManyToOne(() => Maille, (maille: Maille) => maille.products)
    maille: Maille
}