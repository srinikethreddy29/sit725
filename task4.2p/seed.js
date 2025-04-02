const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Project = mongoose.model("Project", new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
}));

const sampleProjects = [
  {
    title: "Kitten 1",
    image: "images/kitten.jpg",
    link: "About Kitten 1",
    description: "This is an sample description of Kitten 1"
  },
  {
    title: "Kitten 2",
    image: "images/kitten2.jpg",
    link: "About Kitten 2",
    description: "This is an sample description of Kitten 2"
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.jpg",
    link: "About Kitten 3",
    description: "This is an sample description of Kitten 3"
  }
];
Project.insertMany(sampleProjects)
  .then(() => {
    console.log("🎉 Sample projects inserted!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting sample projects:", err);
    mongoose.connection.close();
  });