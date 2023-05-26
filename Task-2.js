console.log(1);
console.log(2);


const getTodos = async () => {

    const response = await fetch('https://www.coursehubiitg.in/api/codingweek/contributions');
    const data = await response.json();

   

    var l = data.length;
   // var arr = data;
    var temp;
   for(var i=0;i<l;i++){
        for(var j=0;j<l-i-1;j++){
            if(data[j+1].points>data[j].points){
                temp=data[j+1];
                data[j+1]=data[j];
                data[j]=temp;

            }
        }

    }
    
    


  //  document.getElementsByClassName("big1")[0].src = data[0].avatar;
   // document.getElementsByClassName("big2")[0].src = data[1].avatar;
   // document.getElementsByClassName("big3")[0].src = data[2].avatar;
    document.getElementsByClassName("first")[0].innerHTML = data[0].name+"-"+data[0].points;
    document.getElementsByClassName("second")[0].innerHTML = data[1].name+"-"+data[1].points;
    document.getElementsByClassName("third")[0].innerHTML = data[2].name+"-"+data[2].points;

/*for(var k=3;k<data.length;k++){

    var white=document.createElement("div");
    white.setAttribute("class","white");


    var rnk=document.createElement("div");

}*/

    //console.log(arr);

    return data;
};


getTodos().then(data => console.log('resolved',data));
 

