import { NextResponse } from "next/server";
import db from "@/db.json";

export const GET = (request, { params }) => {
  let blogs = db.blogs;

  const blog = blogs.find((blog) => blog.id == params.id);
  if (blog) {
    return NextResponse.json(blog);
  } else {
    return NextResponse.json(
      {
        message: "The requested URL is not found ",
      },
      {
        status: 404,
      }
    );
  }
};
