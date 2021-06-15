function add(Name,callback,age)
{
        console.log('Hi i am '+' '+Name);
        console.log('my age is'+' '+age);  
        callback();
}

function callMe()
{
    console.log("Working with callback function");
}

add('Tirth',callMe,20);
