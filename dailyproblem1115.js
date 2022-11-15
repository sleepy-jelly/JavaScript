

function makeStudent(id, name,score){
   


    return{
    
    setId(id){
       id =id;
    },

    setName : function(newName){
       name =newName;
    },
    setScore : function(newScore){
         score = newScore;
    },
    getId : function(){
        return id;
    },
    getName : function(){
        return name;
    },
    getScore : function(){
        return score;
    },
    



    getAvg : function(){
        let sum=0;
        let avg =0;
        
        for(let i=0; i<score.length;i++){      //for(const sc of socre);
            sum=sum+score[i];
        }
        avg= sum/score.length;
        avg =Math.round(avg*100)/100;
        return avg;
    
    }
    }
}



const stu1 = makeStudent('hg-d','hatty',[67,87,94]);





const avg =  stu1.getAvg();

console.log(avg); 
console.log(stu1.getName());

stu1.setName('aaa');
console.log(stu1.getName());