function f(a,b){
    return a+b
}
function cachingDecorator(func) {
    let calls = [];
    
    this.getAllCalls = () => {
            return calls;
        }

    return (a, b) => {
        calls.push([a, b])
        return getAllCalls();
    }
    
}

f = cachingDecorator(f)
f(1,2)
f(3,60)
console.log(f(1,2))