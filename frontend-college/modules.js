//what are js modules?
//js modules are reusable pieces of code that can be imported and exported between different files. They help to organize code and make it easier to maintain and reuse. Modules can contain functions, variables, classes, and other code that can be shared across different parts of an application. In JavaScript, there are two main types of modules: CommonJS (used in Node.js) and ES6 modules (used in modern JavaScript). ES6 modules use the `import` and `export` syntax to manage dependencies between files.
function add(a, b) {
    return a + b;
}
export const sub = (a, b) => a - b;

export default function mul(a,b){
    return a*b;
}