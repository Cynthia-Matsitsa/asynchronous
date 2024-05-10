const internship = true;

const ourPromises = new Promise((resolve,reject)=>{
    if(internship){
        resolve('I made it')

    }
    else{
        reject('I will not give up');
    }
}
);
ourPromises.then(()=>{
    console.log('I will get confirmed');
})
.catch(()=>{
    console.log('I will continue appliying')
})
.finally(()=>{
    console.log('I will be a SoftwareEngineer')

});
console.log({ourPromises});


async function myAkiraChixDream(){
    await ourPromises;
}
myAkiraChixDream();