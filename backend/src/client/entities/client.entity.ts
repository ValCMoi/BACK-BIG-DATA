import { Cart } from "src/cart/entities/cart.entity";
import { Consult } from "src/consult/entities/consult.entity";
import { Rate } from "src/rate/entities/rate.entity";
import { Column, Entity, Generated, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryColumn()
    readonly id: string;

    @Column({nullable:false})
    readonly email: string;

    @Column({nullable:false})
    readonly password: string;

    @OneToMany(() => Rate, (rate) => rate.id)
    rates: Rate[]

    @OneToMany(() => Cart, (cart) => cart.id)
    carts: Cart[]

    @OneToMany(() => Consult, (consult) => consult.id)
    consults: Consult[]
}
