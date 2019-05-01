# SuperMicro BMC

There are 3 ways to use the BMC on a SuperMicro motherboard: through vanilla SSH, through a CLI provided by SuperMicro, and through web browser.

## Vanilla SSH

This is most likely what you are going to use. It sound primitive, but that's the beauty of it. If you are reading this, it probably means your DevOps team is pretty fucked up already which means it's unlikely that you will get sudo access or a browser on the machine you are using, but guess what, no one can stop you from doing SSH.

### Example

#### How to Power Cycle
```bash
ssh ADMIN@10.23.53.114                 # The default username and password for SuperMicro are ADMIN

cd system1                             # These two names are common for SuperMicro, but if unsure,
cd pwrmgtsvc1                          # use ls to query what are the entry names.

stop                                   # power down the machine

start                                  # power on the machine
```
