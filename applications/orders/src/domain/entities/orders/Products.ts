import { Entity } from "@domain/application/core/domain/entity"
import { OrderItem } from "./OrderItem"

interface Image {}

interface IProductProps {
  id:         string 
  storeId:    string // Foreign Key to Store 
  categoryId: string // Foreign Key to Category
  name:       string
  price:      number
  isFeatured: Boolean    
  isArchived: Boolean   
  sizeId:     string // Foreign Key to Size
  colorId:    string // Foreign Key to Color
  images:     Image[] // Relation to Image model
  orderItems: OrderItem[] // Relation to Order model
  createdAt:  Date  
  updatedAt:  Date   
}

export class Products extends Entity<IProductProps> {}