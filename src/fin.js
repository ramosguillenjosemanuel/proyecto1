//use basededatos01
db.vehiculos.insertOne({"marca":"ferrari","km/h" :300,"modelo": 488})
db.vehiculos.insertOne({"marca":"Lamborghini", "km/h":180,"modelo":"urus"})
db.vehiculos.insertOne({"marca":"Volkswagen","km/h":500,"modelo":"Touareg"})
db.vehiculos.insertOne({"marca":"Mercedes-Benz","km/h":0,"modelo":"Clase S"})
db.vehiculos.insertOne({"marca":"Maserati","km/h":1000,"modelo":"Levante"})
db.vehiculos.insertOne({"marca":"Audi","km/h":1658,"modelo":"Audi R8"})
db.vehiculos.find({"km/h":{$gte:19}})

/*{ "_id" : ObjectId("5f85f0381da5249880ae83eb"), "marca" : "ferrari", "km/h" : 300, "modelo" : 488 }
{ "_id" : ObjectId("5f85f0671da5249880ae83ec"), "marca" : "Lamborghini", "km/h" : 180, "modelo" : "urus" }
{ "_id" : ObjectId("5f85f0771da5249880ae83ed"), "marca" : "Volkswagen", "km/h" : 500, "modelo" : "Touareg" }
{ "_id" : ObjectId("5f85f08f1da5249880ae83ef"), "marca" : "Maserati", "km/h" : 1000, "modelo" : "Levante" }
{ "_id" : ObjectId("5f85f0a61da5249880ae83f0"), "marca" : "Audi", "km/h" : 1658, "modelo" : "Audi R8" } */
> db.vehiculos.find({"km/h":{$gt:19}})
/* { "_id" : ObjectId("5f85f0381da5249880ae83eb"), "marca" : "ferrari", "km/h" : 300, "modelo" : 488 }
{ "_id" : ObjectId("5f85f0671da5249880ae83ec"), "marca" : "Lamborghini", "km/h" : 180, "modelo" : "urus" }
{ "_id" : ObjectId("5f85f0771da5249880ae83ed"), "marca" : "Volkswagen", "km/h" : 500, "modelo" : "Touareg" }
{ "_id" : ObjectId("5f85f08f1da5249880ae83ef"), "marca" : "Maserati", "km/h" : 1000, "modelo" : "Levante" }
{ "_id" : ObjectId("5f85f0a61da5249880ae83f0"), "marca" : "Audi", "km/h" : 1658, "modelo" : "Audi R8" } */
db.vehiculos.find({"km/h":{$lt:501}})
/*{ "_id" : ObjectId("5f85f0381da5249880ae83eb"), "marca" : "ferrari", "km/h" : 300, "modelo" : 488 }
{ "_id" : ObjectId("5f85f0671da5249880ae83ec"), "marca" : "Lamborghini", "km/h" : 180, "modelo" : "urus" }
{ "_id" : ObjectId("5f85f0771da5249880ae83ed"), "marca" : "Volkswagen", "km/h" : 500, "modelo" : "Touareg" }
{ "_id" : ObjectId("5f85f0821da5249880ae83ee"), "marca" : "Mercedes-Benz", "km/h" : 0, "modelo" : "Clase S" } */
db.vehiculos.find({"km/h":{$ne:19}})
/* { "_id" : ObjectId("5f85f0381da5249880ae83eb"), "marca" : "ferrari", "km/h" : 300, "modelo" : 488 }
{ "_id" : ObjectId("5f85f0671da5249880ae83ec"), "marca" : "Lamborghini", "km/h" : 180, "modelo" : "urus" }
{ "_id" : ObjectId("5f85f0821da5249880ae83ee"), "marca" : "Mercedes-Benz", "km/h" : 0, "modelo" : "Clase S" }
{ "_id" : ObjectId("5f85f08f1da5249880ae83ef"), "marca" : "Maserati", "km/h" : 1000, "modelo" : "Levante" }
{ "_id" : ObjectId("5f85f0a61da5249880ae83f0"), "marca" : "Audi", "km/h" : 1658, "modelo" : "Audi R8" }*/
