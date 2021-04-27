// Print the sequence - Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for(var i=1; i<=20; i++){
    if(i % 2 != 0) {
        console.log(i)
    }
}



// Print the sequence - Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

var m= [4,2.5,1,-0.5,-2,-3.5]

for(var i=0; i<m.length; i++) {

    console.log(m[i])
}

// Sigma - Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050in the end.

var sum=0
for(var b=1; b<=100; b++){
    sum += b
    }
    console.log(sum)


    // Factorial - Write code that will multiply values from 1 to some value n until the variable product is larger than 100 million (1e8 for short). At the end console.log that value of n.

var n=1
var x=1
while(x < 1e8){
    x *= n

    console.log(x)

    n++
}
    console.log(n)