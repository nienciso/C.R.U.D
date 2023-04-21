const{read} = require("./CRUD/read");
const{create} = require("./CRUD/create");

const data = process.argv;

const comand = (comando,param1,param2) => {
switch (comando) {
    case "read":
        console.log(read());
        break;
        case "create":
            create(param1,param2);
            break;
        case "delete":
            break;
    default:
        console.log("El comando no coincide");
        break;

    }
};

comand(data[2],data[3],data[4]);