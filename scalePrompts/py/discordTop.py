import discord
import datetime

client = discord.Client()


def get_top_posts(channel, days):
    """Gets the top 25 posts with the most engagement in a channel over the specified number of days."""
    top_posts = []
    for message in channel.history(limit=days * 24 * 60 * 60):
        if message.author != client.user:
            top_posts.append((message.content, message.reactions))

    top_posts.sort(key=lambda x: sum(len(r.users) for r in x[1]), reverse=True)
    return top_posts[:25]


@client.event
async def on_message(message):
    if message.content.startswith("!topposts"):
        top_posts = get_top_posts(message.channel, 7)
        for content, reactions in top_posts:
            await message.channel.send(content)


client.run("YOUR_BOT_TOKEN")
