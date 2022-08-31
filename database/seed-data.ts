interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        " Pending: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "In-Progress: Totam consectetur eius, minus deserunt dolor illo dolorem",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Finished: id enim fugit facere voluptatibus autem dolore",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
