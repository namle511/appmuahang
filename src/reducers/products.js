var initState = [
    {
        id: 1,
        name: 'Iphone 7+',
        image: 'https://znews-photo-td.zadn.vn/w480/Uploaded/ynssi/2016_11_29/iphone7backsshakeshack.jpg',
        desciption: 'Apple',
        price: 500,
        inventory: 10,
        rate: 4
    },

    {
        id: 2,
        name: 'Samsung Note9',
        image: 'data:image/jpeg;base64,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',
        desciption: 'Samsung',
        price: 600,
        inventory: 15,
        rate: 5
    },

    {
        id: 3,
        name: 'Oppo F1S',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfmnDxrMgI07Twc4evBKY21LXoT1UCKQxc2ak4hD7Y-hFdZ6B',
        desciption: 'Oppo',
        price: 300,
        inventory: 30,
        rate: 3
    },

    {
        id: 4,
        name: 'iPhone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/172404/iphone-x-256gb-silver-400x460.png',
        desciption: 'Apple',
        price: 800,
        inventory: 10,
        rate: 5
    },
    
    {
        id: 5,
        name: 'Samsung Galaxy S8',
        image: 'data:image/jpeg;base64,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',
        desciption: 'SAMSUNG',
        price: 500,
        inventory: 15,
        rate: 4
    },
];

const products = (state = initState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products ;