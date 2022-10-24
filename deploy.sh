#!/usr/bin/zsh
source ~/.zshrc
cd /home/pi/bday-reminder
nvm use
serve -s build -l 3001
