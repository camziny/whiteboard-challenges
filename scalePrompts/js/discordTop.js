const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.on("message", async (message) => {
  if (message.content === "!topposts") {
    const posts = await message.guild.fetchMessages({
      limit: 25,
      before: message.createdAt,
    });

    const topPosts = posts.sort(
      (a, b) => b.interactions.total - a.interactions.total
    );

    const embed = new Discord.MessageEmbed()
      .setTitle("Top Posts")
      .setDescription(
        "The top 25 posts with the most engagement over the previous 7 day period"
      )
      .setColor("RANDOM")
      .setTimestamp(new Date());

    for (const post of topPosts) {
      embed.addField(
        post.author.username,
        `${post.interactions.total} interactions`,
        true
      );
    }

    await message.channel.send(embed);
  }
});

client.login("YOUR_BOT_TOKEN");
