import MongodbClient from "./index.js";

(async () => {
    const mongodb = new MongodbClient();
    await mongodb.connection();

    mongodb.setCollectionName = "USERS";
    console.log("\nCollection name: ", mongodb.getCollectionName)

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

    const findDocuments = await mongodb.findDocuments({
        data: {
            _id: {$exists: true},
        },
        sortBy: {timestamp: -1},
        limit: 3
    })
    console.log("\nFound documents: ", findDocuments);

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

    const deleteOneDocument = await mongodb.deleteOneDocument({
        filter: {
            job: "Architect"
        }
    });
    console.log("\nDeleted One Document: ", deleteOneDocument);

    const deleteMultipleDocuments = await mongodb.deleteMultipleDocuments({
        filter: {
            _id: {$exists: true}
        }
    });
    console.log("\nDeleted Multiple Documents: ", deleteMultipleDocuments);

    await mongodb.closeConnection();
})()