export default class Cl_suscriptor {
    constructor(c, tP) {
        this.ced = c;
        this.tipoPlan = tP;
    }
    get ced() {
        return this._ced;
    }
    set ced(c) {
        this._ced = c;
    }

    get tipoPlan() {
        return this._tipoPlan;
    }
    set tipoPlan(tP) {
        this._tipoPlan = tP;
    }
    precioPagar() {
        if (this.tipoPlan == "A") {
            return 3 + (3 * 0.10);
        } else if (this.tipoPlan == "B") {
            return 5 + (5 * 0.10);
        } else if (this.tipoPlan == "C") {
            return 10;
        }
    }

}