import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooConnection = {
  isConnected: 0,
};

/**
 * If we're already connected, return. If we're not connected, disconnect from any existing connections
 * and connect to the database
 * @returns The connection to the database.
 */
export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log("we're connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConnected === 1) {
      console.log("using previous connection");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongooConnection.isConnected = 1;
  console.log("Connected to MongoDb", process.env.MONGO_URL);
};

/**
 * It checks if the connection is already established, and if it is, it disconnects from the database
 * @returns The connection to the database.
 */
export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongooConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("Disconnected of MongoDB");
};
