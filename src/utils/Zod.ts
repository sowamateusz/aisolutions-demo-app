import { NextResponse } from "next/server";
import { z } from "zod";

export const handleZodError = (error: unknown) => {
  if (error instanceof z.ZodError) {
    return NextResponse.json(error.format(), { status: 422 });
  }
  return NextResponse.json(error, { status: 500 });
};
