# SuperMicro BMC

BMC is used to remotely control the servers. Different OEMs usually have their own BMC system.

## How to Power Cycle
```bash
ssh ADMIN@10.23.53.114                 # The default username and password for SuperMicro are ADMIN

cd system1                             # These two names are common for SuperMicro, but if unsure,
cd pwrmgtsvc1                          # use ls to query what are the entry names.

stop                                   # power down the machine

start                                  # power on the machine
```
