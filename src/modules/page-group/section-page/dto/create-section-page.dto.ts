import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsIn, IsInt, IsNotEmptyObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { SeoDto } from "src/internal";
import { ID } from "src/types";
import { LocaleSectionPageDto } from "./locale-section-page.dto";

export class CreateSectionPageDto {

    @IsString()
    slug: string;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => LocaleSectionPageDto)
    locale: LocaleSectionPageDto[]


    @IsInt()
    sectionId: ID

    
}
