// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const contactos = [
  { name: 'John', lastName: 'Doe', id: 1, address: 'Corrientes 1234'},
  { name: 'Pepe', lastName: 'Mujica', id: 2, address: 'Uruguay 22'}
]

export default function handler(req, res) {
  res.status(200).json(contactos);
};
