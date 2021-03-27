const url = 'http://localhost:3300';

$(document).ready(function() {

	// Get All Cars
	$('#btn-get-car').click(() => {
		console.log('Getting all cars')

		$.get('http://localhost:3300/cars', (res) => {
			console.log('data:', res);
		})

		console.log('This is after the request to get all cars!')
	})

	
	$('#vin').click(() => {
		const vin = $('#car-vin').val();
		console.log(`Requesting car with vin ${vin}`);

		$.get(url + `/car/${vin}`, (res) => {
			// res is an array!
			const car = Car.fromRow(res[0]);
			console.log('data:', car);
		});

	});

	
	$('#create-car').click(() => {
		console.log('Creating a car');
		const type=$('#type').val();
		const make = $('#make').val();
		const model=$('#model').val();
		
		
		const vin1 = $('#vin1').val();
		const year=$('#year').val();
		
		



		const car = new Car ( type, make,model,vin1,year);

		console.log(car);

		$.post(url + '/register', car, (res) => {
			console.log("Created ", res)
		});

		
	});
	$('#create-driver').click(() => {
		console.log('Registering driver');
		const name=$('#name').val();
		const email = $('#email').val();
		const license=$('#license').val();
		
		
		
		const expiration=$('#expiration').val();
		
		



		const driver = new Driver (name,email,license,expiration);

		console.log(driver);

		$.post(url + '/register1', driver, (res) => {
			console.log("Created ", res)
		});

		
	});

	// Login
	$('#login').click(() => {
		const username = $('#username').val();
		const password = $('#password').val();

		const loginRequest = new LoginRequest(username, password);

		$.post('yourserver/login', loginRequest, (res) => {
			if (res === true) {
				// move one
			} else {
				// show some error
			}
		})

	});

	// Delete Student
	$('#del_vin').click(() => {
	
		const id = $('#inp_del').val();

		$.ajax({
			url: url + `/car/${id}`,
			type: 'DELETE',
			success: (res) => {
			  console.log('delete response', res)
			},
			error: (err) => {
				console.log('delete error', err)
			}
		});
	});

	// Update a car
	$('#btn-modify-car').click(() => {
		console.log('Modifying a car');

		const name = $('#student-name-put').val();
		const sex = $('#student-sex-put').val();
		const id = $('#student-id-put').val();
		const student = new Student (id, name, sex);

		console.log(student);

		$.ajax({
			url: url + `/students/${id}`,
			type: 'PUT',
			data: student,
			success: (res) => {
			  console.log('put response', res)
			},
			error: (err) => {
				console.log('put error', err)
			}
		});
	});
});
class Car {
	constructor(type,make,model,vin1,year) {
		this.type=type;
		this.make=make;
		this.model=model;
		this.vin1=vin1;
		this.year=year
	}

    static fromRow(row) {
        return new Car( row.type, row.make,row.model,row.vin1,row.year);
    }

	toString() {
		console.log(`Type [${type}] Make [${make}]Model [${model}]Vin [${vin1}]Year [${year}]`)
	}
}
class Driver{
	constructor(name,email,license,expiration){
		this.name=name;
		this.email=email;
		this.license=license;
		this.expiration=expiration;
	}
	static fromRow(row) {
        return new Driver(row.name, row.email, row.license,row.expiration);
    }
}