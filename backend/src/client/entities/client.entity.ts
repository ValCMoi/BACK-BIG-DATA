import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryColumn()
    readonly id: string;

    @Column({nullable:false})
    readonly email: string;

    @Column({nullable:false})
    readonly password: string;
}
