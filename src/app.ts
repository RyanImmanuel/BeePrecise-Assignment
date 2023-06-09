import express, { Request, Response } from "express";

interface Pet {
  name: string;
  age: number;
}

const pets: Pet[] = [
  {
    name: "PNut",
    age: 3,
  },
  {
    name: "Bashi",
    age: 5,
  },
  {
    name: "Charlie",
    age: 4,
  },
  {
    name: "Luna",
    age: 1,
  },
];

const app = express();

app.get("/pets", (req: Request, res: Response) => {
  const sortParam = req.query.sort as string; // Get the value of the 'sort' query parameter

  // Sort the pets based on the 'sort' query parameter
  if (sortParam === "ASC") {
    pets.sort((a, b) => a.age - b.age); // Sort in ascending order
  } else if (sortParam === "DESC") {
    pets.sort((a, b) => b.age - a.age); // Sort in descending order
  }

  // Send the sorted pets as the response
  //   res.json(pets);
  const petInfo = pets.map((pet) => `${pet.name} - ${pet.age}`).join("<br>");

  res.send(petInfo);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
