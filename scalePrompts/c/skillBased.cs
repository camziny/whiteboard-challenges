using System;
using System.Collections.Generic;

public class Player
{
    public string Name { get; set; }
    public double Rating { get; set; }
    public double RatingDeviation { get; set; }
    public double Volatility { get; set; }
}

public class Matchmaking
{
    private const double DefaultRating = 1500;
    private const double DefaultRatingDeviation = 350;
    private const double DefaultVolatility = 0.06;
    
    private const double Tau = 0.5;
    
    private List<Player> players;
    
    public Matchmaking()
    {
        players = new List<Player>();
    }
    
    public void AddPlayer(string name)
    {
        var player = new Player
        {
            Name = name,
            Rating = DefaultRating,
            RatingDeviation = DefaultRatingDeviation,
            Volatility = DefaultVolatility
        };
        
        players.Add(player);
    }
    
    public void RemovePlayer(string name)
    {
        var player = players.Find(p => p.Name == name);
        if (player != null)
        {
            players.Remove(player);
        }
    }
    
    public void UpdatePlayerRating(string name, double rating, double ratingDeviation, double volatility)
    {
        var player = players.Find(p => p.Name == name);
        if (player != null)
        {
            player.Rating = rating;
            player.RatingDeviation = ratingDeviation;
            player.Volatility = volatility;
        }
    }
    
    private double GetG(double ratingDeviation)
    {
        return 1.0 / Math.Sqrt(1.0 + 3.0 * Math.Pow(ratingDeviation, 2) / Math.Pow(Math.PI, 2));
    }
    
    private double GetE(Player player, Player opponent)
    {
        return 1.0 / (1.0 + Math.Exp(-GetG(opponent.RatingDeviation) * (player.Rating - opponent.Rating)));
    }
    
    private double GetV(Player player, List<Player> opponents)
    {
        double sum = 0;
        foreach (var opponent in opponents)
        {
            var e = GetE(player, opponent);
            sum += Math.Pow(GetG(opponent.RatingDeviation), 2) * e * (1.0 - e);
        }
        
        return 1.0 / sum;
    }
    
    private double GetDelta(Player player, List<Player> opponents, List<double> results)
    {
        double sum = 0;
        for (int i = 0; i < opponents.Count; i++)
        {
            var e = GetE(player, opponents[i]);
            sum += GetG(opponents[i].RatingDeviation) * (results[i] - e);
        }
        
        return GetV(player, opponents) * sum;
    }
    
    private void UpdatePlayer(Player player, double delta, double v)
    {
        player.Rating += delta * v;
        player.RatingDeviation = Math.Sqrt(Math.Pow(player.RatingDeviation, 2) * (1 - v));
        player.Volatility *= 0.5;
    }
    
    public void PerformMatchmaking(List<string> playerNames, List<double> results)
    {
        if (playerNames.Count != results.Count)
        {
            throw new ArgumentException("Number of players and results must be the same.");
        }
        
        var playersInMatch = new List<Player>();
        foreach

 (var name in playerNames)
        {
            var player = players.Find(p => p.Name == name);
            if (player == null)
            {
                throw new ArgumentException($"Player {name} does not exist.");
            }
            
            playersInMatch.Add(player);
        }
        
        double averageRating = 0;
        double averageRatingDeviation = 0;
        foreach (var player in playersInMatch)
        {
            averageRating += player.Rating;
            averageRatingDeviation += player.RatingDeviation;
        }
        averageRating /= playersInMatch.Count;
        averageRatingDeviation /= playersInMatch.Count;
        
        var opponents = new List<Player>(playersInMatch);
        opponents.Remove(playersInMatch[0]);
        
        double delta = GetDelta(playersInMatch[0], opponents, results);
        double v = GetV(playersInMatch[0], opponents);
        UpdatePlayer(playersInMatch[0], delta, v);
        
        foreach (var opponent in opponents)
        {
            opponents.Remove(opponent);
            delta = GetDelta(opponent, opponents, results);
            v = GetV(opponent, opponents);
            UpdatePlayer(opponent, delta, v);
            opponents.Add(opponent);
        }
    }
    
    public void PrintPlayerRatings()
    {
        foreach (var player in players)
        {
            Console.WriteLine($"{player.Name}: Rating={player.Rating}, RD={player.RatingDeviation}, Volatility={player.Volatility}");
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var matchmaking = new Matchmaking();
        
        // Add players
        matchmaking.AddPlayer("Player1");
        matchmaking.AddPlayer("Player2");
        matchmaking.AddPlayer("Player3");
        
        // Perform matchmaking with results
        var players = new List<string> { "Player1", "Player2", "Player3" };
        var results = new List<double> { 1, 0, 0.5 };
        matchmaking.PerformMatchmaking(players, results);
        
        // Print player ratings
        matchmaking.PrintPlayerRatings();
    }
}
