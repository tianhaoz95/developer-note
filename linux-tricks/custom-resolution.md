---
layout: single
title: Custom Resolution
---

```bash
# First we need to get the modeline string for xrandr
# Luckily, the tool "gtf" will help you calculate it.
# All you have to do is to pass the resolution & the-
# refresh-rate as the command parameters:
gtf 1920 1080 60

# In this case, the horizontal resolution is 1920px the
# vertical resolution is 1080px & refresh-rate is 60Hz.
# IMPORTANT: BE SURE THE MONITOR SUPPORTS THE RESOLUTION

# Typically, it outputs a line starting with "Modeline"
# e.g. "1920x1080_60.00"  172.80  1920 2040 2248 2576  1080 1081 1084 1118  -HSync +Vsync
# Copy this entire string (except for the starting "Modeline")

# Now, use "xrandr" to make the system recognize a new
# display mode. Pass the copied string as the parameter
# to the --newmode option:
xrandr --newmode "1920x1080_60.00"  172.80  1920 2040 2248 2576  1080 1081 1084 1118  -HSync +Vsync

# Well, the string within the quotes is the nick/alias
# of the display mode - you can as well pass something
# as "MyAwesomeHDResolution". But, careful! :-|

# Then all you have to do is to add the new mode to the
# display you want to apply, like this:
xrandr --addmode VGA1 "1920x1080_60.00"

# VGA1 is the display name, it might differ for you.
# Run "xrandr" without any parameters to be sure.
# The last parameter is the mode-alias/name which
# you've set in the previous command (--newmode)

# It should add the new mode to the display & apply it.
# Usually unlikely, but if it doesn't apply automatically
# then force it with this command:
xrandr --output VGA1 --mode "1920x1080_60.00"
```

<br/>

<iframe data-aa="1180202" src="//acceptable.a-ads.com/1180202?size=Adaptive&background_color=141010&text_color=ff9f00&title_color=ff9900&title_hover_color=ff9900&link_color=ff9900&link_hover_color=ff9900" scrolling="no" style="border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>


