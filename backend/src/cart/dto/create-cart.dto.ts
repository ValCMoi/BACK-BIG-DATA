export class CreateCartDto {
    readonly id!: string
    readonly idClient?: string
    readonly month?: number
    readonly productsId?:string[]
}
