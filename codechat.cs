using System;

class Program
{
    const int InitialHealth = 100;
    const int HealthDecrease = 10;
    const int HealthIncrease = 20;
    const int ScoreIncrease = 10;

    static void Main()
    {
        int health = InitialHealth;
        int score = 0;

        Console.WriteLine("Welcome to the Adventure Game!");
        Console.WriteLine("You are in a dark forest.");

        while (health > 0)
        {
            DisplayOptions();

            int choice;
            Console.Write("Enter your choice: ");
            if (int.TryParse(Console.ReadLine(), out choice))
            {
                ProcessChoice(choice, ref health, ref score);
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a valid number.");
            }

            health -= HealthDecrease;
            if (health <= 0)
            {
                Console.WriteLine($"Game over. Your score: {score}");
            }
        }
    }

    /// <summary>
    /// Displays the available options to the player.
    /// </summary>
    static void DisplayOptions()
    {
        Console.WriteLine("\nOptions:");
        Console.WriteLine("1. Go deeper into the forest.");
        Console.WriteLine("2. Rest by the campfire.");
        Console.WriteLine("3. Quit the game.");
    }

    /// <summary>
    /// Processes the player's choice and updates health and score accordingly.
    /// </summary>
    /// <param name="choice">The player's choice.</param>
    /// <param name="health">The player's health.</param>
    /// <param name="score">The player's score.</param>
    static void ProcessChoice(int choice, ref int health, ref int score)
    {
        switch (choice)
        {
            case 1:
                Console.WriteLine("You go farther into the forest and discover a treasure chest!");
                score += ScoreIncrease;
                break;
            case 2:
                Console.WriteLine("You rest by the campfire and regain 20 health.");
                health += HealthIncrease;
                break;
            case 3:
                Console.WriteLine($"Thanks for playing! Your score: {score}");
                Environment.Exit(0);
                break;
            default:
                Console.WriteLine("Invalid choice. Try again.");
                break;
        }
    }
}