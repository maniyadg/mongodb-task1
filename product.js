// Find all the information about each products
db.projrct1.find().pretty();

// Find the product price which are between 400 to 800
db.projrct1.find({ product_price: { $gte: 400, $lte: 800 } }).pretty();

// Find the product price which are not between 400 to 600
db.projrct1.find({ $or: [{ product_price: { $lt: 400 } }, { product_price: 600 }] }).pretty();

// List the four product which are grater than 500 in price
db.projrct1.find({product_name:{$gte:500}}).pretty()

// Find the product name and product material of each products
db.projrct1.find({},{product_name:1 , product_material:1}).pretty()

// Find the product with a row id of 10
db.projrct1.find({id:`10`}).pretty()

// Find only the product name and product material
db.projrct1.find({},{product_name:1 , product_material:1}).pretty()

// Find all products which contain the value of soft in product material
db.projrct1.find({product_material:"Soft"}).pretty()

// Find products which contain product color indigo  and product price 492.00
db.projrct1.find({$and: [{product_color:"Indigo" , product_price:"492.00"}]}).pretty()

// Delete the products which product price value are same
db.projrct1.deleteMany({product_price:'36.00'})