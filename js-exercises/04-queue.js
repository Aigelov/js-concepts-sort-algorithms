/* Queues */

function Queue () {
  const collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

let q = new Queue();
q.enqueue('First');
q.enqueue('Second');
q.enqueue('Third');

// q.print();
// q.dequeue();
// q.print();
// console.log(q.front());
// q.print();
// console.log(q.isEmpty());


function PriorityQueue () {
  const collection = [];
  this.printCollection = function() {
    (console.log(collection));
  };
  this.enqueue = function(element){
    if (this.isEmpty()){
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++){
        if (element[1] < collection[i][1]){ //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added){
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    let value = collection.shift();
    return value[0];
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

let pq = new PriorityQueue();
pq.enqueue(['First', 2]);
pq.enqueue(['Second', 3]);
pq.enqueue(['Third', 1]);
pq.enqueue(['Forth', 2]);
pq.printCollection();