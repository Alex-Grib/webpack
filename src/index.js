import { v4 as uuidv4 } from 'uuid';

const sayHello = () => {
    const id = uuidv4();

    console.log('hello Alex'); 
    console.log('id', id)
}

sayHello();
