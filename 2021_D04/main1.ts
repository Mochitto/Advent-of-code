/* 
 Parse input.txt 
  1. Extract bingo call numbers - split by /n [0]
  2. Extract bingo table numbers as matrices [[],[],[],[]...]
 

  Iterator function go through each board (exits when winning table is found)
    1. Create function to check for winning row/column of each table and keep count of how many calls have been made. Inside iterator fn  based on callNumbers to go through the array of tables.
    2. While loop (until the end of the bingo call numbers array length) to iterate through boards. Keep call number as global variable outside of the while loop.
    3. Check inside each row andd column to see if numbers match the call numbers, if match convert to 0. i.e [[0,23,0,0,44],[...]...]
    4. When winnerCheck function returns true, exit out of while loop and return winning table

  Add up the numbers in the winning table and multiply with the current callNumber. Put in answer to advent of code site and pray. 

Error checking:
  - Make sure 5 numbers have been called at least 
  - If there is no win something is wrong


*/
