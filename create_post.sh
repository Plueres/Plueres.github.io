#!/bin/bash

# Prompt for title
echo "Enter the title of the post:"
read title

# Replace spaces with hyphens for the file name
formattedTitle=${title// /-}

# Get current date and time
formattedDate=$(date +"%Y-%m-%d %H:%M:%S %z")

# Create front matter
frontMatter="---
layout: article
title:  \"$title\"
date:   $formattedDate
---
"

# Create post file
postFileName=$formattedTitle.md
postFilePath=_articles/$postFileName

echo "$frontMatter" > $postFilePath

echo "Post created: $postFilePath"