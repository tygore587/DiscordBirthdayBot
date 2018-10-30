# -*- coding: utf-8 -*-
"""
Created on Thu Oct 18 17:13:31 2018

@author: Lycran

"""

import discord
import json
import os

cwd = os.getcwd()

token = json.loads(open(cwd + '/Documents/GitHub/DiscordBirthdayBot/token.json').read())['token']


client = discord.Client()

@client.event
async def on_ready():
    print(f"We have logged in as {client.user}")

@client.event
async def on_message(message):
    print(f"{message.channel}: {message.author}: {message.author.name}: {message.content}")
    if message.content == '?test':
        print(f"success")
        await message.channel.send("success")


client.run(token)
