// random data generator

const path = require('path')
const fs = require('fs');
const faker = require('faker');
faker.locale = 'id_ID'

const data = new Array(100).fill(null).map((_) => {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: Number(faker.finance.amount(1, 100000, 2)),
    quantity: Number(faker.finance.amount(0, 100, 0)),
    imageUrl: `http://placeimg.com/640/480?v=${faker.random.uuid()}`
  }
})

fs.writeFile(path.resolve(__dirname, "data.json"), JSON.stringify(data), () => { })