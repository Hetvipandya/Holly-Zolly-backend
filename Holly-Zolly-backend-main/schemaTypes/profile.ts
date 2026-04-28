import { defineType, defineField } from "sanity";

export default defineType({
  name: "profile",
  title: "User Profile",
  type: "document",

  fields: [
    defineField({
      name: "fullName",
      type: "string",
      validation: (Rule) => Rule.required().min(3),
    }),

    defineField({
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: "phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 🔥 MULTIPLE ADDRESSES HERE
    defineField({
      name: "addresses",
      title: "Addresses",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Address Type (Home/Office)",
            }),

            defineField({
              name: "street",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "city",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "state",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "pincode",
              type: "string",
              validation: (Rule) =>
                Rule.required().regex(/^[0-9]{6}$/),
            }),

            defineField({
              name: "country",
              type: "string",
              initialValue: "India",
            }),
          ],
        },
      ],
    }),
  ],
});