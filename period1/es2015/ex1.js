//ex1.1

const PI = 3.141593
PI > 3.0

//ex1.2

for (let i = 0; i < a.length; i++) {
    let x = a[i]

}
for (let i = 0; i < b.length; i++) {
    let y = b[i]

}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4

//ex1.3

{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}