let a=13;
let count=0;
for(i=1; i<=a; i++){
    if(a%i==0){
        count++;
    }
}
 (count==2)? console.log("Yes"): console.log("No");