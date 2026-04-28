import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",

  fields: [
    defineField({
      name: "orderId",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      type: "string",
    }),

    defineField({
      name: "status",
      type: "string",
      initialValue: "Placed",
    }),

    defineField({
      name: "total",
      type: "number",
    }),

    defineField({
      name: "items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "id", type: "string" }),
            defineField({ name: "name", type: "string" }),
            defineField({ name: "price", type: "number" }),
            defineField({ name: "quantity", type: "number" }),
            defineField({ name: "image", type: "string" }),
          ],
        },
      ],
    }),

    defineField({
      name: "address",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "address", type: "string" }),
        defineField({ name: "phone", type: "string" }),
      ],
    }),
  ],
});