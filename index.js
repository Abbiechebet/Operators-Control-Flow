//problem statement for question 3

/**
 *The subjects for each class group are as follows:
	  Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
    Social Science Subjects - Accounting, Commerce, Marketing, Geography
    Arts Subjects - Government, Economics, Literature, History
    General Subjects - English, Mathematics

 if…else conditional statement
 */

//solution
let classGroup = 'artSubjects';

if (classGroup == 'scienceSubjects') {
  console.log('Physics, Chemistry, Biology, Technical Drawing');
}

else if(classGroup == 'socialScienceSubjects') {
  console.log('Accounting, Commerce, Marketing, Geoghraphy');
}

 else if( classGroup == 'artSubjects') {
   console.log('Government, Economics, Literature, History');
 }

 else{
  console.log('English, Mathematics');
 }

//probem statement for question 5

/**
 * Write a program that takes a positive number (num) and finds the power of 2 nearest to
  that number. The program stores the resulting value to pwr. Then you log the answer in 
  this format: 
“The number (pwr) is the power of 2 nearest to (num).”
 */

//solution
let x = 2;
let num = 40;
let pwr = x ** 5;
if(pwr < num){
   console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num);
}
else{
  console.log('ERROR');
}