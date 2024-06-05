function isBalanced(str1){
    if(str1.length <= 1) return false
    let stack=[];
    for (let i=0; i<str1.length;i++){
        if(str1[i] === '(') stack.push(i)
        if(str1[i] === ')'){
            if(!stack.length) return false
            stack.pop()
        }
    }
    if(stack.length) return stack[0]
    return true
}

console.log(isBalanced('((()())')) // 0
console.log(isBalanced('((()()))')) // true
console.log(isBalanced('((()()))(')) // 8console.lo)g(
