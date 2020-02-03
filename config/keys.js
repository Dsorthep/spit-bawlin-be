module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/tictacdb",
  secretOrKey: "secret"  //process.env.MONGODB_URI
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI)
