# Mongodb-Crud

A package that can perform **CRUD** operations using the [*npm mongodb package*](https://www.npmjs.com/package/mongodb).

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install *@asince_npm/mongodb-crud*.

```bash
npm install @asince_npm/mongodb-crud
```

## Quick Start

* After importing the **MongodbClient** class, you can connect to mongodb with the *connection()* function and then
  assign the collection name with *setCollectionName()*.

### Initiating

```js
import MongodbClient from "@asince_npm/mongodb-crud";

(async () => {
    const mongodb = new MongodbClient();
    await mongodb.connection();

    mongodb.setCollectionName = "USERS";
    console.log("\nCollection name: ", mongodb.getCollectionName);
...
})();
```

#### Response

```
Collection name:  USERS
```

### Create Operations

````js
/**
 * https://docs.mongodb.com/drivers/node/current/usage-examples/insertOne/
 * The process of adding one-data to the collection.
 * @param data to be added.
 * @returns {Promise<InsertOneResult<Document>>}
 */
const createOneDocument = await mongodb.createOneDocument({
        data: {
            name: "Abdullah Serhat INCE",
            age: 24,
            job: "Software Engineer",
            sex: "Male",
            married: false,
            timestamp: new Date()
        }
    });
console.log("\nOne document created: ", createOneDocument);

/**
 * https://docs.mongodb.com/drivers/node/current/usage-examples/insertMany/
 * The process of adding multiple-data to the collection.
 * @param data to be added.
 * @returns {Promise<InsertManyResult<Document>>}
 */
const createMultipleDocuments = await mongodb.createMultipleDocuments({
    data: [
        {
            name: "Name example1",
            age: 33,
            job: "Lawyer",
            sex: "Female",
            married: false,
            timestamp: new Date()
        }, {
            name: "Name example2",
            age: 42,
            job: "Banker",
            sex: "Male",
            married: true,
            timestamp: new Date()
        },
    ]
});
console.log("\nMultiple documents created: ", createMultipleDocuments);
````

#### Response

````
One document created:  {
  acknowledged: true,
  insertedId: new ObjectId("61ab6add855830dae26f42c1")
}

Multiple documents created: {
  acknowledged: true,
  insertedCount: 2,
  insertedIds: {
    '0': new ObjectId("61ab6add855830dae26f42c2"),
    '1': new ObjectId("61ab6add855830dae26f42c3")
  }
}
````

### Read Operation

```js
 /**
 * One or multiple documents search operation.
 * https://docs.mongodb.com/drivers/node/current/usage-examples/find/
 * @param filter property of the document to be searched.
 * @param sortBy how will the document order be?
 * @param limit how many documents will be listed? Default 10 items.
 * @returns {Promise<*>}
 */
const findDocuments = await mongodb.findDocuments({
        data: {
            _id: {$exists: true},
        },
        sortBy: {timestamp: -1},
        limit: 3
    })
console.log("\nFound documents: ", findDocuments);
```

#### Response

```
Found documents:  [
  {
    _id: new ObjectId("61ab6add855830dae26f42c3"),
    name: 'Name example2',
    age: 42,
    job: 'Banker',
    sex: 'Male',
    married: true,
    timestamp: 2021-12-04T13: 19: 25.549Z
  },
  {
    _id: new ObjectId("61ab6add855830dae26f42c2"),
    name: 'Name example1',
    age: 33,
    job: 'Lawyer',
    sex: 'Female',
    married: false,
    timestamp: 2021-12-04T13: 19: 25.549Z
  },
  {
    _id: new ObjectId("61ab6add855830dae26f42c1"),
    name: 'Abdullah Serhat INCE',
    age: 24,
    job: 'Software Engineer',
    sex: 'Male',
    married: false,
    timestamp: 2021-12-04T13: 19: 25.462Z
  }
]
```

### Update Operations

````js
 /**
 * https://docs.mongodb.com/drivers/node/current/usage-examples/updateOne/
 * Update process for 1 document.
 * @param filter property of the document to be searched.
 * @param set data to be updated according to the filter.
 * @param options what option would it be?
 * @returns {Promise<*>}
 */
const updateOneDocument = await mongodb.updateOneDocument({
        filter: {
            job: "Architect",
        },
        set: {
            name: "Name example3",
            age: 37,
            job: "Architect",
            sex: "Female",
            married: false,
            timestamp: new Date()
        },
        options: {upsert: true}
    });
console.log("\nDocument Updated: ", updateOneDocument);

/**
 * https://docs.mongodb.com/drivers/node/current/usage-examples/updateMany/
 * Update process for multiple documents.
 * @param filter property of the document to be searched.
 * @param set data to be updated according to the filter.
 * @param options what option would it be?
 * @returns {Promise<*>}
 */
const updateMultipleDocuments = await mongodb.updateMultipleDocuments({
    filter: {
        _id: {$exists: true}
    },
    set: {
        timestamp: new Date()
    },
    // options: {upsert: true}
});
console.log("\nMultiple Document Updated: ", updateMultipleDocuments);
````

#### Response

```
Document Updated:  {
  acknowledged: true,
  modifiedCount: 0,
  upsertedId: new ObjectId("61ab6add22eee5e5213c6fc7"),
  upsertedCount: 1,
  matchedCount: 0
}

Multiple Document Updated: {
  acknowledged: true,
  modifiedCount: 4,
  upsertedId: null,
  upsertedCount: 0,
  matchedCount: 4
}
```

### Delete Operations

```js
 /**
 * https://docs.mongodb.com/drivers/node/current/usage-examples/deleteOne/
 * One document deletion.
 * @param filter property of the document to be searched.
 * @returns {Promise<DeleteResult>}
 */
const deleteOneDocument = await mongodb.deleteOneDocument({
        filter: {
            job: "Architect"
        }
    });
console.log("\nDeleted One Document: ", deleteOneDocument);

/**
 * https://docs.mongodb.com/drivers/node/current/usage-examples/deleteMany/
 * Multiple document deletion.
 * @param filter property of the document to be searched.
 * @returns {Promise<DeleteResult>}
 */
const deleteMultipleDocuments = await mongodb.deleteMultipleDocuments({
    filter: {
        _id: {$exists: true}
    }
});
console.log("\nDeleted Multiple Documents: ", deleteMultipleDocuments);
```

#### Response

```
Deleted One Document:  {acknowledged: true, deletedCount: 1}

Deleted Multiple Documents: {acknowledged: true, deletedCount: 3
}
```

## Import Package for ECMAScript6

- You can simply run the **script.sh** script, which downloads the babel npm packages for *ECMAScript6* and creates the
  *.babelrc* file. It also downloads the *dotenv* package and creates *.env* file and makes definitions for **MONGODB
  Credentials** in it.

### Script Contents
````sh
npm install babel-core babel-cli babel-preset-env dotenv --save-dev
printf '{ "presets": ["env"] }' > .babelrc
printf 'MONGODB_USERNAME=<username>\nMONGODB_PASSWORD=<password>\nMONGODB_CLUSTER=<cluster-name>\nMONGODB_DATABASE_NAME=<database-name>' > .env

# A script for configuring the use of the javascript es6 module.

````
### Run Command
```bash
bash node_modules/@asince_npm/mongodb-crud/scripts.sh
```

#### Response .env file contents

```dotenv
MONGODB_USERNAME=<username>
MONGODB_PASSWORD=<password>
MONGODB_CLUSTER=<cluster-name>
MONGODB_DATABASE_NAME=<database-name>
```
