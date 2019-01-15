//* 1
class Car {
    constructor(_mileage, _fuel) {
        this._mileage = _mileage;
        this._fuel = _fuel;
    }
}
//* 2
class MyCar extends Car {
    constructor(_mileage, _fuel, _fuelConsumptionRate, _FuelTankCapacity) {
        super(_mileage, _fuel);
        this._fuelConsumptionRate = _fuelConsumptionRate;
        this._FuelTankCapacity = _FuelTankCapacity;
    }
    /**
     * Поездка
     * @param mileageDrive заданное расстояние поездки
     */
    drive(mileageDrive) {
        // Узнаем максимальное растояние поездки, исходя из объема топлива и потребления
        let maxMileageDrive = this._fuel / this._fuelConsumptionRate;
        //Ставим условие максимального растояния поездки и в путь!
        if (mileageDrive > maxMileageDrive) {
            mileageDrive = maxMileageDrive;
            console.log(`Вам хватит топлива проехать только ${maxMileageDrive} км`);
        }
        this._mileage += mileageDrive;
        //При этом затратим топливо
        this._fuel -= mileageDrive * this._fuelConsumptionRate;
        if (!this._fuel)
            console.log("Требуется заправка, бак пуст");
    }
    ;
    /**
     * Заправка бака
     * @param fuel - объем заправляемого топлива
     */
    refuel(fuel) {
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
    }
    ;
    //* 3
    get mileage() {
        return this._mileage;
    }
    get fuel() {
        return this._fuel;
    }
}
const car = new MyCar(1000, 0, 0.12, 80);
car.refuel(10);
car.drive(90);
console.log(car.mileage);
console.log(car.fuel);
