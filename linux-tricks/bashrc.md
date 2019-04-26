# Here is the sexy `.bashrc` file

## Section 1: Corporate Proxy

### If you are in the Ubuntu universe
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

## Section 2: Git
