const url = require("url");
const querystring = require("querystring");

// Example URL to parse
const myUrl =
  "https://www.example.com:8080/path/page?name=John&age=30&city=NewYork#section1";

console.log("========================================");
console.log("URL PARSING DEMONSTRATION");
console.log("========================================\n");

console.log("Original URL:", myUrl);
console.log("\n");

// Parse URL using url module
const parsedUrl = url.parse(myUrl, true);

console.log("1. PARSED URL OBJECT:");
console.log("   Protocol:", parsedUrl.protocol); // https:
console.log("   Host:", parsedUrl.host); // www.example.com:8080
console.log("   Hostname:", parsedUrl.hostname); // www.example.com
console.log("   Port:", parsedUrl.port); // 8080
console.log("   Pathname:", parsedUrl.pathname); // /path/page
console.log("   Search:", parsedUrl.search); // ?name=John&age=30&city=NewYork
console.log("   Query:", parsedUrl.query); // { name: 'John', age: '30', city: 'NewYork' }
console.log("   Hash:", parsedUrl.hash); // #section1

// Access query parameters
console.log("\n2. QUERY PARAMETERS:");
console.log("   Name:", parsedUrl.query.name); // John
console.log("   Age:", parsedUrl.query.age); // 30
console.log("   City:", parsedUrl.query.city); // NewYork

// Using querystring module to parse
const queryString =
  "name=Alice&age=25&email=alice@example.com&hobbies=reading&hobbies=gaming";

console.log("\n3. QUERYSTRING MODULE:");
console.log("   Query String:", queryString);

const parsed = querystring.parse(queryString);
console.log("   Parsed Object:", parsed);

// Access individual values
console.log("\n4. PARSED VALUES:");
console.log("   Name:", parsed.name);
console.log("   Age:", parsed.age);
console.log("   Email:", parsed.email);
console.log("   Hobbies:", parsed.hobbies);

// Convert object back to query string
const obj = {
  username: "johndoe",
  password: "secret123",
  role: "admin",
};

const stringified = querystring.stringify(obj);
console.log("\n5. STRINGIFY OBJECT:");
console.log("   Object:", obj);
console.log("   Query String:", stringified);

// URL with special characters
const specialUrl =
  "https://api.example.com/search?q=node.js tutorial&filter=beginner";
const parsedSpecial = url.parse(specialUrl, true);

console.log("\n6. SPECIAL CHARACTERS:");
console.log("   Original:", specialUrl);
console.log("   Search Query:", parsedSpecial.query.q);
console.log("   Filter:", parsedSpecial.query.filter);

// Using URL constructor (modern approach)
const modernUrl = new URL(
  "https://www.example.com/products?category=electronics&sort=price"
);

console.log("\n7. MODERN URL API:");
console.log("   Origin:", modernUrl.origin);
console.log("   Pathname:", modernUrl.pathname);
console.log("   Search Params:", modernUrl.searchParams);
console.log("   Category:", modernUrl.searchParams.get("category"));
console.log("   Sort:", modernUrl.searchParams.get("sort"));

console.log("\n========================================\n");
