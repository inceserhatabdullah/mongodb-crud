import dotenv from "dotenv";

dotenv.config();

const {MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE_NAME} = process.env;

export default `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`;