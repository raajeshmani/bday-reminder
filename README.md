# Remind me yearly

One stop yearly reminder which notifies you 5 mins before the day.

## Deployment
```
nvm use
npm i
npm i -g serve
npm run build
serve -s build -l 3001
```

## Serve React page as a daemon
```

[Unit]
Description=Bday Reminder Daemon for serving React app
After=network.target network-online.target

[Service]
WorkingDirectory=/home/ryuuk/bday-reminder
Environment=/home/ryuuk/.nvm/versions/node/v18.11.0/bin
ExecStart=/home/ryuuk/.nvm/nvm-exec npm run prod

[Install]
WantedBy=multi-user.target

```


## Screenshots

![image](https://user-images.githubusercontent.com/17880433/197405045-42d12a1b-976e-4bad-a3d2-882765bee13f.png)

![image](https://user-images.githubusercontent.com/17880433/197404971-534f9399-449b-4a96-8e9d-d0a664f129c4.png)

