import {MongoClient} from "mongodb";
import mongodbConnectionUrl from "./config.js";

export default class {
    #client = new MongoClient(mongodbConnectionUrl);
    #collectionName;

    /**
     * Connection operation.
     * @returns {Promise<MongoClient>}
     */
    async #connection() {
        return await this.#client.connect();
    }

    async #closeConnection() {
        return await this.#client.close();
    }

    /**
     * https://docs.mongodb.com/drivers/node/current/usage-examples/insertOne/
     * The process of adding one-data to the collection.
     * @param data to be added.
     * @returns {Promise<InsertOneResult<Document>>}
     */
    async #createOneDocument({data}) {
        return await this.#client.db().collection(this.#collectionName).insertOne(data);
    }

    /**
     * https://docs.mongodb.com/drivers/node/current/usage-examples/insertMany/
     * The process of adding multiple-data to the collection.
     * @param data to be added.
     * @returns {Promise<InsertManyResult<Document>>}
     */
    async #createMultipleDocuments({data}) {
        return await this.#client.db().collection(this.#collectionName).insertMany(data);
    }

    /**
     * One or multiple documents search operation.
     * https://docs.mongodb.com/drivers/node/current/usage-examples/find/
     * @param filter property of the document to be searched.
     * @param sortBy how will the document order be?
     * @param limit how many documents will be listed? Default 10 items.
     * @returns {Promise<*>}
     */
    async #findDocuments({filter, sortBy, limit = 10}) {
        const result = await this.#client.db().collection(this.#collectionName).find(filter).sort(sortBy).limit(limit);
        return result.toArray();
    }

    /**
     * https://docs.mongodb.com/drivers/node/current/usage-examples/updateOne/
     * Update process for 1 document.
     * @param filter property of the document to be searched.
     * @param set data to be updated according to the filter.
     * @param options what option would it be?
     * @returns {Promise<*>}
     */
    async #updateOneDocument({filter, set, options}) {
        return await this.#client.db().collection(this.#collectionName).updateOne(filter, {$set: set}, options);
    }

    /**
     * https://docs.mongodb.com/drivers/node/current/usage-examples/updateMany/
     * Update process for multiple documents.
     * @param filter property of the document to be searched.
     * @param set data to be updated according to the filter.
     * @param options what option would it be?
     * @returns {Promise<*>}
     */
    async #updateMultipleDocuments({filter, set, options}) {
        return await this.#client.db().collection(this.#collectionName).updateMany(filter, {$set: set}, options);
    }

    /**
     * https://docs.mongodb.com/drivers/node/current/usage-examples/deleteOne/
     * One document deletion.
     * @param filter property of the document to be searched.
     * @returns {Promise<DeleteResult>}
     */
    async #deleteOneDocument({filter}) {
        return await this.#client.db().collection(this.#collectionName).deleteOne(filter);
    }

    /**
     * https://docs.mongodb.com/drivers/node/current/usage-examples/deleteMany/
     * Multiple document deletion.
     * @param filter property of the document to be searched.
     * @returns {Promise<DeleteResult>}
     */
    async #deleteMultipleDocuments({filter}) {
        return await this.#client.db().collection(this.#collectionName).deleteMany(filter);
    }

    async connection() {
        return await this.#connection();
    }

    async closeConnection() {
        return await this.#closeConnection();
    }

    async createOneDocument({data}) {
        return await this.#createOneDocument({data});
    }

    async createMultipleDocuments({data}) {
        return await this.#createMultipleDocuments({data});
    }

    async findDocuments({filter, sortBy, limit}) {
        return await this.#findDocuments({filter, sortBy, limit});
    }

    async updateOneDocument({filter, set, options}) {
        return await this.#updateOneDocument({filter, set, options});
    }

    async updateMultipleDocuments({filter, set, options}) {
        return await this.#updateMultipleDocuments({filter, set, options});
    }

    async deleteOneDocument({filter}) {
        return await this.#deleteOneDocument({filter});
    }

    async deleteMultipleDocuments({filter}) {
        return await this.#deleteMultipleDocuments({filter});
    }

    /**
     * collection definition.
     * @param collectionName
     */
    set setCollectionName(collectionName) {
        this.#collectionName = collectionName;
    }

    /**
     * call the defined collection
     * @returns {*}
     */
    get getCollectionName() {
        return this.#collectionName;
    }
}