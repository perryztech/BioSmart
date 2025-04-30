import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67ff031c0006e0b79fba");

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };
