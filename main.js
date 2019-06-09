/*practice with nested loops.
remember, you can always refactor your code later
to use more succint iterator variables*/

let bobsFollowers = ['Linda', 'Teddy', 'Gene', 'Louise'];
let tinasFollowers = ['Jimmy Jr.', 'Gene', 'Louise'];
let mutualFollowers = [];

for(let b = 0; b < bobsFollowers.length; b++){ //this is the outer loop
  /*this is the inner loop.  every time the outer loop runs,
  the inner loop goes through an entire rotation.  meaning, every time the bobsFollowers loop runs, tina's loop runs and checks
  if they have any mutual friends.  if they do, that name gets pushed to the mutualFollowers array */
  for(let t = 0; t < tinasFollowers.length; t++){
    if(bobsFollowers[b] === tinasFollowers[t]){
      mutualFollowers.push(tinasFollowers[t]);
    }
  }

};
console.log(mutualFollowers);
