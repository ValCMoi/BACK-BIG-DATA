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
}
