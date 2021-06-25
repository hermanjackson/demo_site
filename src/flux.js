const getState =({getstore, getActions, setStore})=>{
    return {
        store:{
            product:[
            {
                id:1,
                title:"something",
                image:"http://placehold.jp/150x150.png"
            },
            {
                id:2,
                title:"something",
                image:"http://placehold.jp/150x150.png"
            },
            {
                id:3,
                title:"something",
                image:"http://placehold.jp/150x150.png"
            },
            {
                id:4,
                title:"something",
                image:"http://placehold.jp/150x150.png"
            },
            {
                id:5,
                title:"something",
                image:"http://placehold.jp/150x150.png"
            },
               
            ]
        },
        actions:{}
    };
};

export default getState ;