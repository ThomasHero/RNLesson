### This document is about how to fix common issue qucikly


#### When Awesome project reloading stuck
rm -rf node_modules/
npm cache clean --force
npm install
react-native start

If you met any issues about watchman try this below:
echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server

