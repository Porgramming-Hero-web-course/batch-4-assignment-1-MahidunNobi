{
class Car{
    make: string
    model:string
    year: number
    constructor(make:string, model:string, year:number){
        this.make = make
        this.model=model
        this.year = year
    }

    getCarAge(){
        const today =  new Date()
        return today.getFullYear()-this.year
    }

}
}