# Open Network Ports on RUBIK Pi Linux System

| Port Number | Protocol | Listening Address | Service/Process | Description |
|-------------|----------|-------------------|-----------------|-------------|
| 1883        | TCP      | 0.0.0.0 & :::     | mosquitto       | MQTT message broker. Used for publish/subscribe message communication between IoT devices and servers. |
| 53          | TCP      | 127.0.0.1 & ::1   | dnsmasq         | DNS cache and local resolution service. Typically provides domain name resolution for other local services (e.g., containers, local network discovery). |
| 33869       | TCP      | 127.0.0.1         | containerd      | API for container runtime daemon. Used for managing (starting, stopping) containers. |
| 111         | TCP      | 0.0.0.0 & :::     | init (rpcbind)  | RPC port mapper. Provides port management for remote procedure call services like NFS (Network File System). |
| 80          | TCP      | 0.0.0.0           | lighttpd        | Lightweight web server. Provides web configuration interface or API for the device. |
| 22          | TCP6     | :::               | init (sshd)     | SSH remote secure login service. Used for remote maintenance, debugging, and file transfer. |