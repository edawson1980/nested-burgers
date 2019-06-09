/*practice with nested loops.
remember, you can always refactor your code later
to use more succint iterator variables*/

let bobsFollowers = ['Linda', 'Teddy', 'Gene', 'Louise'];
let tinasFollowers = ['Jimmy Jr.', 'Gene', 'Louise'];
let mutualFollowers = [];

for(let bob = 0; bob < bobsFollowers.length; bob++){ //this is the outer loop
  /*this is the inner loop.  every time the outer loop runs,
  the inner loop goes through an entire rotation.  meaning, every time the bobsFollowers loop runs, tina's loop runs and checks
  if they have any mutual friends.  if they do, that name gets pushed to the mutualFollowers array */
  for(let tina = 0; tina < tinasFollowers.length; tina++){
    if(bobsFollowers[b] === tinasFollowers[t]){
      mutualFollowers.push(tinaFollowers[t]);
    }
  }

};
