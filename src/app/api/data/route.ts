import { NextResponse } from "next/server";

import { handleZodError } from "@/utils/Zod";
import { dataCollection, dataProjection } from "@/utils/DB";

export const GET = async (request: Request) => {
  try {
    const urlParams = new URL(request.url).searchParams;
    const query = urlParams.get("query") || null;
    const page = parseInt(urlParams.get("page") || "1", 10);
    const limit = parseInt(urlParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const filter =
      query && query.length > 1
        ? {
            text: { $regex: query, $options: "i" },
          }
        : {};

    const data = await dataCollection
      .aggregate([
        { $match: filter },
        { $project: dataProjection },
        { $skip: skip },
        { $limit: limit },
      ])
      .toArray();

    // const total = await dataCollection.countDocuments(filter);

    return NextResponse.json({
      data,
      total: 0,
      page,
      limit,
    });
  } catch (error) {
    return handleZodError(error);
  }
};
