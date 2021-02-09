import { IsInt, IsOptional } from "class-validator"
import { ID } from "src/internal"

export class CreateProductVariationAttributeDto {
    @IsOptional()
    id: ID;
    
    @IsInt()
    attrId: ID

    @IsInt()
    attrValueId: ID

}