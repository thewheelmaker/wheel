# wheel
wheel is neat!
It loop until last function got make, jumping over functions that fine, it work like this:

    wheel.ultraloop([[function1,inthowmanytimesfunction1,objectforfunction1],[function2,inthowmanytimesfunction2,objectforfunction2],...[functionn,inthowmanytimesfunctionn,objectforfunctionn]],Howmanytimewheelspinint);

where objectforfunction1 can be example:

    {nice:5, mice:"hello!"}

then function1 can be

    function function1(i)

    {

    console.log(i.stuff.nice); //this is 5

    console.log(i.stuff.mice); // this is hello

    console.log(i.pace);//this is how many times wheel has make this function

    }

wheel.ultaloop makes this function as many times as that number in inthowmanytimesfunction1

or cut it making when it reach Howmanytimewheelspinint,

then if there is function2 wheel make same to it for all that 2D array, so ultra loop can be filled, style


wheel.ultraloop(2Darray,Howmanytimewheelspinint);

So basically if there is like

    for (i = 0; i < 5; i++) {

        hello1(i);
    
    }

    for (i = 0; i < 2; i++) { 

        hello2(i);
    
    }

    for (i = 0; i < 10; i++) { 

         hello3(i);
    
    }

This can make on wheel somewhat like this:

    wheel.ultraloop([[hello1,5,{}],[hello2,2,{}],[hello3,10,{}]],10);

but now that i is object to use "it number from it" it is i.pace, and every {} is under i.stuff  

if you want it bigger you just add new [] like [hello3,12,{}] like

    wheel.ultraloop([[hello1,5,{}],[hello2,2,{}],[hello3,10,{}],[hello3,12,{}]],12);

