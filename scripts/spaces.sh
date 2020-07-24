#!/bin/bash
export PATH=$PATH:/usr/local/bin

SPACES=`yabai -m query --spaces`
WINDOWS=`yabai -m query --windows`
DISPLAYS=`yabai -m query --displays`


echo $(cat <<-EOF
  { "spaces":$SPACES, "windows": $WINDOWS, "displays": $DISPLAYS } 
EOF);
