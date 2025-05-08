// problem -->1
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) return input.toLowerCase();
    else {
      return input.toUpperCase();
    }
  }
  
  // const result1 =formatString("Hello");
  // const result2 =formatString("Hello", true);
  // const result3 =formatString("Hello", false);
  
  // problem ---> 2
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    
    return [...items].filter((item) => item.rating >= 4);
  }
  
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
  
  //   console.log(filterByRating(books))
  
  // problem --> 3
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
  
    for (let array of arrays) {
      result = result.concat(array);
    }
    return result;
  }
  
  //console.log(concatenateArrays(["a", "b"], ["c"]));         // Output: ["a", "b", "c"]
  //console.log(concatenateArrays([1, 2], [3, 4], [5]));       // Output: [1, 2, 3, 4, 5]
  
  // problem --> 4
  
  class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo() {
     return console.log(`Make: ${this.make} Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    getModel() {
     return console.log(`Model: ${this.model}`);
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  
  // problem ---> 5
  
  function processValue(value: string | number): string | number | undefined {
    if (typeof value === "string") {
      return value.length;
    }
    if (typeof value === "number") {
      return value * 2;
    }
  }
  
  processValue("hello"); // Output: 5
  processValue(10); // Output: 20
  
  // problem ---> 6
  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let expensive = products[0];
  
    for (const product of products) {
      if (product.price > expensive.price) {
        expensive = product;
      }
    }
    return expensive;
  }
  
  const products = [
      { name: "Pen", price: 10 },
      { name: "Notebook", price: 25 },
      { name: "Bag", price: 50 }
    ];
    
   getMostExpensiveProduct(products);  // Output: { name: "Bag", price: 50 }
  
  
  
  // problem ---> 8
  
  async function squareAsync(n: number): Promise<number> {
      return new Promise ((resolve, reject) => {
          setTimeout(() => {
              if(n < 0){
                  reject(new Error ("Negative number not allowed"))
              }
              else {
                  resolve(n * n)
              }
          }, 1000)
      })
  }
  
  //squareAsync(4).then(console.log);        // Output after 1s: 16
  //squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed