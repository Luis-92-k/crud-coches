const cars = [
    { id: 1, marca: 'Tesla', modelo: 'Tesla X', color: "negro", año: 2000, precio: 250000 },
    { id: 2, marca: 'BMW', modelo: 'iX3', color: "rojo", año: 1992, precio: 180000 }
];

function printCars() {
    const tableBody = document.getElementById('table-users-body');
    tableBody.innerHTML = '';

    cars.forEach(car => {
        const tr = `<tr>
                        <td>${car.id}</td>
                        <td>${car.marca}</td>
                        <td>${car.modelo}</td>
                        <td>${car.color}</td>
                        <td>${car.año}</td>
                        <td>${car.precio}</td>
                        <td>
                            <button onclick="removeCar(${car.id})" class="btn btn-danger">Eliminar</button>
                            <button onclick="editCar(${car.id})" class="btn btn-warning">Editar</button>
                        </td>
                    </tr>`;
        tableBody.innerHTML += tr;
    })
}

function editCar(idRecibido) {
    editingCar = cars.find((car) => car.id === idRecibido);
    const inputMarca = document.getElementById('marca')
    inputMarca.value = editingCar.marca;
    document.getElementById('modelo').value = editingCar.modelo
    document.getElementById('color').value = editingCar.color
    document.getElementById('año').value = editingCar.año
    document.getElementById('precio').value = editingCar.precio
    

}

function saveCarEdited() {
    
    const newBRand = document.getElementById('marca').value
    const newModel = document.getElementById('modelo').value
    const newColor = document.getElementById('color').value
    const newAño = document.getElementById('año').value
    const newPrecio = document.getElementById('precio').value

    
    editingCar.marca = newBRand;
    editingCar.modelo = newModel;
    editingCar.color = newColor;
    editingCar.año = newAño;
    editingCar.precio = newPrecio;

    printCars();
}


function addCar() {
    
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    const id = getId();
     
    const newCar = {id, marca, modelo, color, año, precio}
    cars.push(newCar); 
    printCars();
    const limpiarForm = document.getElementById('limpiar-form')
    limpiarForm.reset();
}

function getId() {
    let maxi = 0;
    for (let i=0; i < cars.length; i++) {
        if(cars[i].id > maxi){
            maxi = cars[i].id
        }
    }
    return maxi + 1;
}

function removeCar (id) {
    const index = cars.findIndex(car => car.id === id)
    cars.splice(index, 1);
    printCars();
}

printCars();