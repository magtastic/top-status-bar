#!/bin/bash
export PATH=$PATH:/usr/local/bin

SPACES=`yabai -m query --spaces`
WINDOWS=`yabai -m query --windows`


echo $(cat <<-EOF
  { "spaces":$SPACES, "windows": $WINDOWS } 
EOF);
