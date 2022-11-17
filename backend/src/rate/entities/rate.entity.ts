import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class Rate {
    @PrimaryColumn('uuid')
    @Generated('uuid')
    readonly id: string

    @Column({nullable: false, type: 'integer'})
    readonly rateNumber: number
}
