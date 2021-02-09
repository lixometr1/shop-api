import { Module } from "@nestjs/common";
import { AttributeValueModule } from "./attribute-value/attribute-value.module";
import { AttributeModule } from "./attribute/attribute.module";
import { CurrencyModule } from "./currency/currency.module";
import { ProductAttributeModule } from "./product-attribute/product-attribute.module";
import { ProductCategoryModule } from "./product-category/product-category.module";
import { ProductReviewModule } from "./product-review/product-review.module";
import { ProductTagModule } from "./product-tag/product-tag.module";
import { ProductModule } from "./product/product.module";

@Module({
    imports: [CurrencyModule, ProductModule, AttributeModule, AttributeValueModule, ProductAttributeModule, ProductCategoryModule, ProductTagModule, ProductReviewModule]
})

export class ProductGroupModule {}
