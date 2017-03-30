class Animal{
	constructor(name,height){
        this.name=name;
        this.height=height;
	}
	
	Hello(){
       console.log(`Hi i'm ${this.name} from Animal zone`);
	}
}

let king= new Animal('Simba',3.3);
king.Hello();

export default Animal;