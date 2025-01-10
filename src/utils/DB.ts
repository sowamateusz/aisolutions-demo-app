import { MongoClient } from "mongodb";

const client = await MongoClient.connect(process.env.DATABASE_URL as string);
const db = client.db("datasets");

export const maxLimit: number = 100;
export const now = (): Date => new Date();
export const dataCollection = db.collection("pl-court");
export const dataProjection = {
  _id: 1,
  signature: 1,
  excerpt: 1,
  publicationDate: 1,
};
