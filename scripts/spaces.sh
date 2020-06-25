#!/bin/bash
export PATH=$PATH:/usr/local/bin

spaces=`yabai -m query --spaces | jq -r -c '.[]'`

spacesWithInfo=()
for space in $spaces; do
  windowInfo=`jq '.windows[0]' <<< $space | xargs -I{} yabai -m query --windows --window {} 2>/dev/null`
  windowJson='{"windowInfo": '$windowInfo'}'
  test=` jq -r --argjson windowInfo "$windowJson" --argjson space "$space" -n '$windowInfo + $space' 2>/dev/null ` 
  withComma="$test,"
  spacesWithInfo+=("${spacesWithInfo[@]}" "$withComma")
done

echo [${spacesWithInfo[@]}] | jq -R .
