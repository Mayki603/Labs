function fn() {
    const obj1 = { name: 'Dasha' };
    let obj2 = { name: 'Masha' };

    obj1.name = 'Darya';
    obj2.name = 'Mariya';

    //obj1 = { name: 'Katya' }; // TypeError: присвоєння постійної змінної.

    obj2 = { name: 'Sasha' }; 

      console.log("obj1:", obj1);
      console.log("obj2:", obj2);
}

fn();

