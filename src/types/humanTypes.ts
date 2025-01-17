export interface requestHumanResults {
    gender:string,
    name:{
        title:string,
        first:string,
        last:string
    },
    location:{
        street:{
            number:number,
            name:string
        },
        city:string,
        state:string,
        country:string,
        postcode:number,
        coordinates:{
            latitude:string,
            longitude:string
        },
    },
    email:string,
    login:{
        username:string,
        password:string
    },
    age:string
    phone:string,
    cell:string,
    id:{
        value:string
    },
    picture:{
        large:string,
    }
}