import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error("Define MONGODB_URI env variable");

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Use a global variable for caching
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}
const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

async function connect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached;

  return cached.conn;
}

export default connect;
