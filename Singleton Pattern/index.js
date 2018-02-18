var mySingleton = (function(){
    console.log('Hello Singleton!'); 
    return 'Hello!';
})();

console.log(mySingleton);
