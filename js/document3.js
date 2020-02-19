function getUser(id)
{
    setTimeout(()=>{
        return({id:id,Name:'meera'});

    },2000);
}
console.log('before');
const user=getUser(1);
console.log(user);
console.log('after');
