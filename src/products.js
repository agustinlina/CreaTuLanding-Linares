const products = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/13736093/pexels-photo-13736093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Ethiopian Yirgacheffe',
    description: 'Floral and fruity coffee beans from Ethiopia.',
    price: 15.99,
    category: 'coffee_beans',
    stock: 50
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/18451007/pexels-photo-18451007/free-photo-of-granos-alubias-judias-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Colombian Supremo',
    description: 'Rich and full-bodied coffee beans from Colombia.',
    price: 13.99,
    category: 'coffee_beans',
    stock: 60
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/2316554/pexels-photo-2316554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Guatemalan Antigua',
    description: 'Smooth and balanced coffee beans from Guatemala.',
    price: 14.99,
    category: 'coffee_beans',
    stock: 40
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/4085266/pexels-photo-4085266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Brazilian Santos',
    description: 'Nutty and sweet coffee beans from Brazil.',
    price: 12.99,
    category: 'coffee_beans',
    stock: 70
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/13730566/pexels-photo-13730566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Jasmine Green Tea',
    description: 'Fragrant and delicate green tea leaves with jasmine.',
    price: 9.99,
    category: 'tea_leaves',
    stock: 80
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/7366373/pexels-photo-7366373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Earl Grey',
    description: 'Classic black tea leaves with bergamot flavor.',
    price: 8.99,
    category: 'tea_leaves',
    stock: 65
  },
  {
    id: 7,
    img: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Chamomile Tea',
    description: 'Calming and soothing herbal tea leaves.',
    price: 7.99,
    category: 'tea_leaves',
    stock: 90
  },
  {
    id: 8,
    img: 'https://images.pexels.com/photos/2611811/pexels-photo-2611811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Matcha Green Tea',
    description: 'High-quality powdered green tea from Japan.',
    price: 11.99,
    category: 'tea_leaves',
    stock: 50
  },
  {
    id: 9,
    img: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Croissant',
    description: 'Flaky and buttery French pastry.',
    price: 2.99,
    category: 'pastries',
    stock: 30
  },
  {
    id: 10,
    img: 'https://images.pexels.com/photos/4051609/pexels-photo-4051609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Blueberry Muffin',
    description: 'Moist and delicious muffin with fresh blueberries.',
    price: 3.49,
    category: 'pastries',
    stock: 25
  },
  {
    id: 11,
    img: 'https://images.pexels.com/photos/3250406/pexels-photo-3250406.jpeg',
    title: 'Chocolate Chip Cookie',
    description: 'Classic cookie with rich chocolate chips.',
    price: 1.99,
    category: 'pastries',
    stock: 40
  },
  {
    id: 12,
    img: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Cinnamon Roll',
    description: 'Soft and sweet roll with cinnamon filling.',
    price: 3.99,
    category: 'pastries',
    stock: 20
  }
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const condition = true
      condition ? resolve(products) : reject('La carga de productos ha fallado')
    }, 1000)
  })
}

export const getOneProduct = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find(e => e.id.toString() === id))
    }, 1000)
  })
}

export const getProductByCategory = cat => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter(e => e.category === cat))
    }, 1000)
  })
}

export const getProductCategory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Usar Set para obtener categorías únicas
      const uniqueCategories = [
        ...new Set(products.map(product => product.category))
      ]
      resolve(uniqueCategories)
    }, 1000)
  })
}
