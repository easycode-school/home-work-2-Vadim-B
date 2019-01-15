//* 1
abstract class Car {
	constructor(protected _mileage: number, protected _fuel: number) {
	}

	public abstract drive(numberOfKm: number): void;

	public abstract refuel(fuel: number): void;
}

//* 2
class MyCar extends Car {
	constructor(
		_mileage: number,
		_fuel: number,
		private _fuelConsumptionRate: number,
		private _FuelTankCapacity: number) {
		super(_mileage, _fuel);
	}

/**
 * Поездка
 * @param mileageDrive заданное расстояние поездки
 */
	public drive(mileageDrive: number) {
		// Узнаем максимальное растояние поездки, исходя из объема топлива и потребления
		let maxMileageDrive: number = this._fuel / this._fuelConsumptionRate;

		//Ставим условие максимального растояния поездки и в путь!
		if (mileageDrive > maxMileageDrive) {
			mileageDrive = maxMileageDrive;
			console.log(`Вам хватит топлива проехать только ${maxMileageDrive} км`)
		}
		this._mileage += mileageDrive;

		//При этом затратим топливо
		this._fuel -= mileageDrive * this._fuelConsumptionRate;
		if (!this._fuel) console.log("Требуется заправка, бак пуст");
	};

	/**
	 * Заправка бака
	 * @param fuel - объем заправляемого топлива
	 */
	public refuel(fuel: number) {
		// Если бак уже полон, возвращаем об этом сообщение
		if (this._fuel === this._FuelTankCapacity) {
			return console.log("Бак полон");
		}

		// Заправляем бак на указанный объем, но следим за вместимостью бака
		this._fuel += fuel;
		if (this._fuel > this._FuelTankCapacity) {
			this._fuel = this._FuelTankCapacity;
			console.log("Бак полон");
		}
	};

	//* 3
	public get mileage(): number {
		return this._mileage;
	}

	public get fuel(): number {
		return this._fuel;
	}
}

const car = new MyCar(1000, 0, 0.12, 80);
car.refuel(10);
car.drive(90);
console.log(car.mileage);
console.log(car.fuel);