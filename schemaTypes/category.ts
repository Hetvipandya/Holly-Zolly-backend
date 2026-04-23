// schemaTypes/documents/category.ts

export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Name",
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
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Toggle whether this category is active.",
      initialValue: true,
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};