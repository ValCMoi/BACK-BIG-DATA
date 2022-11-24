import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): Promise<import("rxjs").Observable<import("./entities/cart.entity").Cart>>;
    findAll(): Promise<import("./entities/cart.entity").Cart[]>;
    findOne(id: string): string;
    update(id: string, updateCartDto: UpdateCartDto): string;
    remove(id: string): string;
}
