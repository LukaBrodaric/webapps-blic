import mongo from "mongodb";
import express from "express";
import connect from "./db.js";

const app = express();
const port = 2209;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// saveItem
app.post("/saveItem", async (req, res) => {
    let db = await connect("Blic-2");
    let { name, price, brand } = req.body;
    let item = await db.collection("collection").insertOne({
        name: name,
        price: ~~price,
        brand: brand,
    });
    if (item) {
        res.json({
            status: "OK",
            message: `Item ${name} saved in DB`,
        });
    } else {
        res.json({
            status: "Failed",
            message: "Couldn't save item in DB",
        });
    }
});


// getBrand
app.get("/getBrand", async (req, res) => {
    let db = await connect("Blic-2");
    let brand = req.query["brand"];
    let query = { brand: brand };
    let cursor = await db.collection("collection").find(query);
    let items = await cursor.toArray();
    let items_filter = items.map((item) => {
        return {
            name: item.name,
            price: item.price,
        };
    });
    if (items) {
        res.json({
            status: "OK",
           
            data: {
                brand: brand,
                items: items_filter,
            },
        });
    } else {
        res.json({
            status: "Failed",
            message: `Brand ${brand} no found in DB`,
        });
    }
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
