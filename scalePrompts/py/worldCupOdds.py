import random

# List of national teams
teams = [
    "Argentina", "Brazil", "France", "Germany", "Italy", "Netherlands",
    "Portugal", "Spain", "England", "Belgium", "Croatia", "Uruguay",
    "Mexico", "Colombia", "Switzerland", "Denmark", "Sweden", "USA", "Morocco"
]

# Assign random strengths to each team
team_strengths = {team: random.uniform(0, 100) for team in teams}

# Calculate the total strength of all teams
total_strength = sum(team_strengths.values())

# Calculate the probability of each team winning the World Cup
winning_probabilities = {team: (strength / total_strength) * 100 for team, strength in team_strengths.items()}

# Print the probabilities
for team, probability in winning_probabilities.items():
    print(f"{team}: {probability:.2f}%")
