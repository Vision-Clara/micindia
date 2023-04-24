import { Collection, ObjectId } from "mongodb";
import clientPromise from "../mongodb";

const DB_NAME = "micindia";
const COLLECTION_NAME = "news";

export interface News {
  _id: ObjectId;
  title: string;
}

// create news
export const createNews = async (title: string) => {
  const client = await clientPromise;

  const collection: Collection<{ title: string }> = client
    .db(DB_NAME)
    .collection(COLLECTION_NAME);

  const retults = await collection.insertOne({ title });

  return retults;
};

// get all news
export const getNews = async () => {
  const client = await clientPromise;

  const collection: Collection<News> = client
    .db(DB_NAME)
    .collection(COLLECTION_NAME);

  const retults = await collection.find().toArray();

  return retults;
};

// get news by id
export const getNewsById = async (id: string) => {
  const client = await clientPromise;

  const collection: Collection<News> = client
    .db(DB_NAME)
    .collection(COLLECTION_NAME);

  const _id = new ObjectId(id);

  const retults = await collection.findOne({ _id });

  return retults;
};

// delete news by id
export const deleteNewsById = async (blogId: string) => {
  const client = await clientPromise;

  const collection: Collection<News> = client
    .db(DB_NAME)
    .collection(COLLECTION_NAME);

  const id = new ObjectId(blogId);

  const retults = await collection.deleteOne({ _id: id });

  return retults;
};
