class Car {
	constructor(type,make,model,vin,year) {
		this.type=type;
		this.make=make;
		this.model=model;
		this.vin=vin;
		this.year=year
	}
	

    static fromRow(row) {
        return new Car(row.id, row.type, row.make,row.model,row.vin,row.year);
    }

	toString() {
		console.log(`Id [${id}] Type [${type}] Make [${make}]Model [${model}]Vin [${vin}]Year [${year}]`)
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