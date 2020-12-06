
# **Task 4**
>## **Description:-**

* A java program for *rock,paper* and *scissors*.

>## **Rules To Play** :
1. The  player must enter his choice  from the options given below.
1. **Rock** *beats* **Scissor**
1. **Scissor** *beats* **Paper **
1. **Paper** *beats* **Rock**
1. If both players' choices are same, then it is a **tie/draw**
1. Minimum of *2 players* are required to play this game.

>## Pseudo Code :
1. Ask User to enter their choice from the following: ROCK, PAPER, SCISSORS.

2. Scanner class is used in getUserMove() method to get the user's move. This will print and return the User/Player's move.

3. getcompMove() method uses Random class nextInt(num) method. nextInt(num) method generates the random number between 0 and num. getcompMove() method will print and return the computer's move.

4. If UserMove and compMove are the same, then the game is a tie/draw.

5. Else if UserMove and compMove are different, then there are 3 possibilities :

     a. If UserMove is ROCK and compMove is PAPER then comp wins.
         If UserMove is ROCK and compMove is SCISSORS then the player wins.

     b. If UserMove is PAPER and compMove is SCISSORS then computer wins.            If UserMove is PAPER and compMove is ROCK then the player wins.

     c. If UserMove is SCISSORS and compMove is ROCK then computer wins.  
         If UserMove is SCISSORS and compMove is PAPER then the player wins.

>## Asking Player to enter his choice :

```java
import java.util.*;


public class RPS 
{
    
    public static final String ROCK = "ROCK";
    public static final String PAPER = "PAPER";
    public static final String SCISSORS = "SCISSORS";

    public static void main(String args[]) 
    {
      System.out.println("Enter Your Choice:  ");
      System.out.println("ROCK");
      System.out.println("PAPER");
      System.out.println("SCISSORS");
      System.out.println();

>## Getting User's Move :

      String UserMove = getUserMove();
      String compMove = getCompMove(); 
 
      if (UserMove.equals(compMove))
            System.out.println("Game is a Tie!");       
      else if (UserMove.equals(Game.ROCK))
        System.out.println(compMove.equals(Game.PAPER) ? "Computer Wins": "Player wins");   
      else if (UserMove.equals(Game.PAPER))
        System.out.println(compMove.equals(Game.SCISSORS) ? "Computer Wins": "Player wins");   
      else
        System.out.println(compMove.equals(Game.ROCK) ? "Computer Wins": "Player wins");   
    }
    
>## Getting Computer Move :

    public static String getCompMove()
    {
        String compmove;
        Random rand = new Random();
        int input = rand.nextInt(3)+1;
        if (input == 1)
            compmove = Game.ROCK;
        else if(input == 2)
            compmove = Game.PAPER;
        else
            compmove = Game.SCISSORS;
            
        System.out.println("Computer move is: " + compmove);
        System.out.println();
        return compmove;    
    }
>## Displaying the move made by the player :    
    public static String getPlayerMove()
    {
        Scanner in = new Scanner(System.in);
        String input = in.next();
        String Usermove = input.toUpperCase();
        System.out.println("Player move is: "+ Usermove);
        return Usermove;
    }    
}
```
>## **Images Corner** :
### 1. **Rock**
![Rock](https://i.imgur.com/Wwx25wY.jpeg)
### 2.  **Paper**
![Paper](https://i.imgur.com/oT4cjsu.jpeg)
### 3. **Scissor**
![Scissor](https://i.imgur.com/jgRKXpr.jpeg) 
>### **The OG revenge story** :
![The Original Story](https://i.imgur.com/hAS927q.jpeg)

># **Table of Rock Paper Scissor Possibilities :**
|**Player**|**Computer**|**Winner**|
|----------|------------|----------|
|ROCK|ROCK|TIE|
|ROCK|PAPER|COMPUTER|
|ROCK|SCISSOR|PLAYER|
|PAPER|PAPER|TIE|
|PAPER|SCISSOR|COMPUTER|
|PAPER|ROCK|PLAYER|
|ROCK|ROCK|TIE|
|ROCK|PAPER|COMPUTER|
|ROCK|SCISSOR|PLAYER|

<!--CHECK LIST-->

* [X]Add one of the coolest project (or) program you have worked on with proper documentation(README) in the repository you created for task-3.
* [X]There should be atleast 5 commits in the repository at the time of submission.
* [X]Try to include images, bullet point, lists, tables, blockquotes, etc… in your README.md
* [ ]Marks for this task depends on your creativity.
  * (CREATIVITY : ERROR 404 NOT FOUND)
#Hello World!
