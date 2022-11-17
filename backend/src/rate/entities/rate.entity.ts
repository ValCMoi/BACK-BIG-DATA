import { Client } from "src/client/entities/client.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { CreateRateDto } from "../dto/create-rate.dto";

@Entity()
export class Rate {

    @PrimaryColumn('uuid')
    @Generated('uuid')
    readonly id: string

    @Column({nullable: false, type: 'integer'})
    rateNumber: number

    @ManyToOne(() => Client, (client) => client.id)
    client:Client
}
