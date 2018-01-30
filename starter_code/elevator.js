class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction = "";
    this.requests   = [];
    this.passenger= [];
    this.waitingList = [];  
  }

  start() {this.clear = setInterval(() => { this.update(); }, 1000); }

  stop() { 
    if(this.waitingList === 0 && this.requests === 0 ){
      clearInterval(this.clear)
    }
  }

  update() {
    if(this.direction == "up"){
      this.floorUp();
      this._passengersEnter(this.floor);
      this._passengersLeave(this.floor);
    }else{
      this.floorDown();
      this._passengersEnter(this.floor);
      this._passengersLeave(this.floor);
    }
    this.log()
  }

  _passengersEnter() {
    for(let i = 0;i<this.waitingList.length;i++){
      if(this.waitingList[i].originFloor == this.floor){
        this.passenger.push(this.waitingList[i]);
        this.requests.push(this.waitingList[i].destinationFloor);
        console.log(this.waitingList[i].name +" entro en el ascensor");      
        this.waitingList.splice(i,1);
      }
    }
   }

  _passengersLeave() {
    for (let i = 0; i < this.passenger.length; i++) {
      if (this.passenger[i].destinationFloor == this.floor) {
        console.log(this.passenger[i].name + " salio del ascensor")
        this.passenger.splice(i, 1);
      }
    }
   }

  floorUp() {  
     if(this.floor < this.MAXFLOOR){
    this.floor++
    }else{this.direction ="down"};

  }

  floorDown() { 
    if(this.floor > 0){
      this.floor--;
    }else{
      this.direction = "up";
    }
  }


  call(persona) { 
    this.waitingList.push(persona);
    this.requests.push(persona.originFloor);
  }


  log() { console.log("Direction " + this.direction + " | " +  "Floor: "+ this.floor)}
}

module.exports = Elevator;
