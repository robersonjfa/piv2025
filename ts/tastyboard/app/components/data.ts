export type Recipe = {
  id: string;
  name: string;
  photo: string;
  desc: string;
};

export const RECIPES: Recipe[] = [
  {
    id: "r1",
    name: "Spaghetti à Bolonhesa",
    photo: "https://placehold.co/1200x750?text=Spaghetti",
    desc: "Massa com molho de carne e tomates frescos."
  },
  {
    id: "r2",
    name: "Salada Mediterrânea",
    photo: "https://placehold.co/1200x750?text=Salada+Mediterranea",
    desc: "Folhas, pepino, tomate, azeitonas e queijo feta."
  },
  {
    id: "r3",
    name: "Tacos de Frango",
    photo: "https://placehold.co/1200x750?text=Tacos+de+Frango",
    desc: "Tortilhas com frango temperado, milho e guacamole."
  },
  {
    id: "r4",
    name: "Brownie Clássico",
    photo: "https://placehold.co/1200x750?text=Brownie",
    desc: "Chocolate intenso, casquinha crocante e interior macio."
  }
];
