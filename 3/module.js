class Product {
    constructor(key, price, quantity, description) {
      this.key = key;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
  }

function filterProducts(products, str) {
    let filters = str.split("&");
    
    return products.filter((product) => {
      return filters.every((filter) => {
        let [key, op, value] = filter.split("-");
        if (op.length == 2) {
            [op,value] = op.split("");
        }
        switch (op) {
          case "contains":
            return product[key].includes(value);
          case "starts":
            return product[key].startsWith(value);
          case "ends":
            return product[key].endsWith(value);
          case ">":
            return product[key] > parseInt(value);
          case ">=":
            return product[key] >= parseInt(value);
          case "<":
            return product[key] < parseInt(value);
          case "<=":
            return product[key] <= parseInt(value);
          case "=":
            return product[key] == parseInt(value);

        }
      });
    });
}
  
let products = [
  new Product("fdapple", 2, 10, "appleabc"),
  new Product("fdbanana", 2, 6, "bananabc"),
  new Product("fdmilk", 2, 4, "drink."),
  new Product("orange", 5, 6, "fruit"),
];
  
let test = filterProducts(products, "key-contains-fd&price-=2&quantity->5&description-ends-abc");
console.log(test);
  

  
