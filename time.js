

    var name1 = ['Asish', 'Kuhi', 'Trideeb', 'Bonti', 'Pohar', 'Boby'];
    var i =0;

    function disp()
    {
        console.log(name1[i]);
        i++; 
        if(i >= name1.length) 
         {
             clearInterval(timer);
        }  
        
    }

     let timer = setInterval(disp, 1000);