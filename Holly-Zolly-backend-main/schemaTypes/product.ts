// schemaTypes/documents/product.ts

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      }, 
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Average product rating from 0 to 5.",
      validation: (Rule: any) => Rule.required().min(0).max(5),
      initialValue: 4.0,
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
     validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle whether this product is active.",
      initialValue: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};