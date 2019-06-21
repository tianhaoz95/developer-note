---
layout: single
title: Here is your sexy .bashrc file
---

## Corporate Proxy

### If you are in the native Ubuntu universe
```bash
export http_proxy=http://[your-corporate-proxy]:[port]
export https_proxy=https://[your-corporate-proxy]:[port]
export HTTP_PROXY=http://[your-corporate-proxy]:[port]
export HTTPS_PROXY=http://[your-corporate-proxy]:[port]
```

### Just in case you are in the C shell universe
```bash
setenv http_proxy http://[your-corporate-proxy]:[port]
setenv https_proxy https://[your-corporate-proxy]:[port]
setenv HTTP_PROXY http://[your-corporate-proxy]:[port]
setenv HTTPS_PROXY http://[your-corporate-proxy]:[port]
```

## Git

```bash
alias clone_[your most used project]="git clone https://github.com/[your username]/[repository name]"

alias quick_git_push="git add -A && git commit -m \"quick update\" && git push"

alias save_git_password="git config credential.helper store"
```

## Automatically Connect to SSH

```bash
defaultssh() {
	read -p "Do you want to connect to your_username@your_hostname? (y)" -n 1 -r
	echo " got it!"
	if [[ $REPLY =~ ^[Yy]$ ]]
	then
        	echo "Connecting to your_username@your_hostname ..."
        	ssh your_username@your_hostname
	fi
}

defaultssh
```

## Customizable SSH reminder

```bash
sshbook() {
	echo "Listing all the commonly used SSH servers:"
	echo -e "\t 1) username@hostname_1 (description)"
	echo -e "\t 2) username@hostname_2 (description)"
	read -p "Which SSH server do you want to connect? " -n 1 -r
	echo " got it :)"
	if [[ $REPLY =~ ^[1]$ ]]
	then
		echo "Connecting to username@hostname_1 ..."
		ssh username@hostname_1
	fi
	if [[ $REPLY =~ ^[2]$ ]]
	then
		echo "Connecting to username@hostname_2 ..."
		ssh username@hostname_2
	fi
}
```

## Initialize SSHFS

```bash
initsshfs() {
	mkdir -p $SSHFS_MOUNT_DIR
	sshfs $WORKSTATION_HOST:$SSHFS_REMOTE_DIR $SSHFS_MOUNT_DIR
}

endsshfs() {
	diskutil unmount $MOUNT_DIR
}

export WORKSTATION_HOST="your_username@your_hostname"
export SSHFS_MOUNT_DIR="$HOME/Desktop/workstation"
export SSHFS_REMOTE_DIR="/path/to/remote/directory/to/share"
```

<br/>

<iframe data-aa="1180202" src="//acceptable.a-ads.com/1180202" scrolling="no" style="border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>

