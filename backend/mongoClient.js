import * as mdb from 'mongodb'
const config = require("dotenv").config();

const mongoUrl = config.parsed.MONGO_HOST
const client = mdb.MongoClient
const dbName = "binye"

export const state = {
    conn: null
}

export function connect(url = mongoUrl) {
    return new Promise((resolve, reject) => {
        client.connect(url, function (err, resp) {
            if (!err) {
                console.log("Connected to MongoDB server", url)
                state.conn = resp
                resolve(true)
            } else {
                reject(err)
            }
        })
    })
}

export function closeConnection(){
    state.conn.close()
}

export async function insert(collectionName, object) {
    const collection = await createCollectionIfNotExists(collectionName)
    const db = state.conn.db(dbName)
    const insertRes = await db.collection(collection).insertOne(object)
    return insertRes.ops[0]
}

export async function insertMany(collectionName, objectArray) {
    if (objectArray instanceof Array && objectArray.length > 0) {
        const collection = await createCollectionIfNotExists(collectionName)
        const db = state.conn.db(dbName)
        const insertRes = await db.collection(collection).insertMany(objectArray)
        return insertRes
    }
}

export async function createCollectionIfNotExists(collectionName) {
    const ifExists = await collectionExists(collectionName)
    if (ifExists) {
        return collectionName
    }

    const db = state.conn.db(dbName)
    const res = await db.createCollection(collectionName)
    return res.collectionName
}

export async function collectionExists(collectionName) {
    const db = state.conn.db(dbName)
    const collections = await db.listCollections().toArray()
    if (collections.some(e => e['name'] === collectionName)) {
        return true
    }

    return false
}

export async function get(collectionName, query) {
    const db = state.conn.db(dbName)
    const result = await db.collection(collectionName).find(query).toArray()
    return result
}

export async function getOne(collectionName, query) {
    const db = state.conn.db(dbName)
    const result = await db.collection(collectionName).findOne(query)
    return result
}

export async function count(collectionName) {
    const db = state.conn.db(dbName)
    const count = await db.collection(collectionName).count()
    return count
}

export async function update(collectionName, query, object) {
    const db = state.conn.db(dbName)
    const updateRes = await db.collection(collectionName).updateOne(query, object)
    return updateRes
}

export async function remove(collectionName, query) {
    const db = state.conn.db(dbName)
    const deleteRes = await db.collection(collectionName).deleteOne(query)
    return deleteRes
}


export async function aggregate(collectionName, pipeline, skip = 0, limit = 9999) {
    const db = state.conn.db(dbName)
    var cursor = await db.collection(collectionName).aggregate(pipeline).skip(skip).limit(limit);

    // Iterate over all the items in the cursor
    return await cursor.get(function (err, results) {
        assert.equal(null, err);
        console.log(results)
        return results
    });
}