let family = {
    John:{
        age:56,
        lastName:'Gagoyan',
        parents:[{name:'Jason',age:15},{name:'Jane',age:87}]
    },
    Johnuhi:{
        lastName:'Gagoyan',
        age:65,
        parents:[{name:'Jason',age:15},{name:'Jane',age:87}]
    },
    Jason:{
        lastName:'Gagoyan',
        age:15,
        children:[{name:'John',age:56},{name:'Johnuhi',age:65}]
    },
    Jane:{
        lastName:'',
        age:87,
        children:[{name:'John',age:56},{name:'Johnuhi',age:65}]
    }
}

const {John:{age:age_John,lastName:lastName_John,parents:parents_John}} = family;
console.log(j);
