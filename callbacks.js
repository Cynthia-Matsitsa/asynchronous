function greet(userName,callback){
    console.log(`Hello there ${userName}`);
    callback();
};

function intro(){
    console.log('This is me');

}
greet("Hellen",intro);


