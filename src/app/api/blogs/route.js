import db from "@/db.json";
import { NextResponse } from "next/server";

export const GET = (request) => {
  let blogs = db.blogs;
  return NextResponse.json(blogs);
};