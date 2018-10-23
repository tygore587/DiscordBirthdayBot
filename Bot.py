# -*- coding: utf-8 -*-
"""
Created on Thu Oct 18 17:13:31 2018

@author: Lycran

Token: NTA0MjM4MzYzMzU2NjkyNDgx.DrCIug.UyyHpFJ2SvDUh-lyOvrMXBibDIc
"""

import discord

client = discord.Client()

@client.event

async def on_ready():
    print(f"We have logged in as {client.user}")

@client.event
async def on_message(message):
    print(f"{message.channel}: {message.author}: {message.author.name}: {message.content}")

client.run("NTA0MjM4MzYzMzU2NjkyNDgx.DrCIug.UyyHpFJ2SvDUh-lyOvrMXBibDIc")