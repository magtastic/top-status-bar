#!/bin/bash
export PATH=$PATH:/usr/local/bin

airpodsStatus=`blueutil --recent | grep "Magtastic’s AirPods Pro"`

if [[ $airpodsStatus == *"not connected"* ]]; then
  echo "false"
else 
  echo "true"
fi
