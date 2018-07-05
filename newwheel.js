var	wheel={
looploop:function(eatfunction,ll)
	{
						
	var array=[];
	
	loop(0,(eatfunction.length),(eatfunction.length)*ll-2);

	 return ;
	 
	function loop(n,k,too){
var outnumber= ((n+step(n,k))/k);
				
					if((k-n)>0)
							{
							
							
							if((n===0)&&!(eatfunction[step(n,k)][1]<outnumber+1))
									{
						
							eatfunction[step(n,k)][0](outnumber+1);
						

									}
							if((n!=0)&&!(eatfunction[step(n,k)][1]<outnumber))
									{
									
					
							eatfunction[step(n,k)][0](outnumber);
							
						
									}
									
							}
					if(((k-n)<0)&&!(eatfunction[step(n,k)*(-1)][1]<(outnumber+1)))// ei pysty lukemaan taulukkoa
						{
			
							eatfunction[step(n,k)*(-1)][0](outnumber+1);
							
						
				  
				  } 
					if((k===n)&&!(eatfunction[step(n,k)][1]<outnumber))
							{
					
							eatfunction[step(n,k)][0](outnumber+1);
							
						

							}
							


		if(n<=too){
						loop(n+1,k,too);
				}
				return;
				
				function step(n,k){
			
				  return (k-n)%k; 
				}
				}
	
	
	
	},
	ultraloop:function(eatfunction,ll)
	{
						
	var array=[];
	
	loop(0,(eatfunction.length),(eatfunction.length)*ll-2);

	 return ;
	 
	function loop(n,k,too){
var outnumber= {pace:((n+step(n,k))/k),stuff: "holder"};//eatfunction[step(n,k)][2]
				// n:0 0+ 1+1/2=1 
				
			//	0  	1 	2 		3   	 4		n
			//  2	1 	0 		-1		-2	(k-n)
			//	0  	1  	0  		1 		0	%k
			//	1  	2 	 1  	2    	2	+n
			// 	1/2	1	 1 		1/2		2  /k mikä täm out number yritää olla
					if((k-n)>0)
							{
							
							
							if((n===0)&&!(eatfunction[step(n,k)][1]<outnumber.pace+1))
									{
							outnumber.pace=outnumber.pace+1;			
							outnumber.stuff=eatfunction[step(n,k)][2];
							eatfunction[step(n,k)][0](outnumber);
						

									}
							if((n!=0)&&!(eatfunction[step(n,k)][1]<outnumber.pace))
									{
									
							outnumber.stuff=eatfunction[step(n,k)][2];
							eatfunction[step(n,k)][0](outnumber);
							
						
									}
									
							}
					if(((k-n)<0)&&!(eatfunction[step(n,k)*(-1)][1]<(outnumber.pace+1)))// ei pysty lukemaan taulukkoa
						{
							outnumber.pace=outnumber.pace+1;
							outnumber.stuff=eatfunction[step(n,k)*(-1)][2];
							eatfunction[step(n,k)*(-1)][0](outnumber);
							
						
				  
				  } 
					if((k===n)&&!(eatfunction[step(n,k)][1]<outnumber.pace))
							{
							outnumber.pace=outnumber.pace+1;	
							outnumber.stuff=eatfunction[step(n,k)][2];
							eatfunction[step(n,k)][0](outnumber);
							
						

							}
							


		if(n<=too){
						loop(n+1,k,too);
				}
				return;
				
				function step(n,k){
			
				  return (k-n)%k; 
				}
				}
	
	
	
	}
	

};
