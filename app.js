const{read} = require("./CRUD/read");
const{create} = require("./CRUD/create");
const {update} = require("./CRUD/update");
const {deleteTitle} =require("./CRUD/delete");
const data = process.argv;

const comand = (comando,param1,param2) => {
switch (comando) {
    case "read":
            console.log(read());
        break;
        case "create":
            create(param1,param2);
            break;
        case "update" :
            update(param1, param2);
            break;
        case "delete" :
            deleteTitle(param1);    
        break;
    default:
        console.log("El comando no coincide");
        break;

    }
};

comand(data[2],data[3],data[4]);

