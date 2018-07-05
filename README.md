# wheel
wheel is neat it loop until last fuction got make, jumping ower functions that fine, it work like this.


wheel.ultraloop([[function1,inthowmanytimesfunction1,objectforfunction1],[[function2,inthowmanytimesfunction2,objectforfunction2],...       [functionn,inthowmanytimesfunctionn,objectforfunctionn]],Howmanytimewheelspinint);

where objectforfunction1 can be exemple:

  {nice:5, mice:"hello!"}

then function1 can be

  function function1(i)
  {
  console.log(i.stuff.nice); //this is 5
  console.log(i.stuff.mice); // this is hello
  console.log(i.pace);//this is how many times wheel has make this function
  }
  
wheel.ultaloop makes this function many as many times is that number inthowmanytimesfunction1 or cut it making when it reach        Howmanytimewheelspinint,then if there is function2 wheel make same to it for all that 2D array, so ultra loop can be filled, style
  
  wheel.ultraloop(2Darray,Howmanytimewheelspinint);
