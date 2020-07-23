defaults read ~/Library/Preferences/com.apple.HIToolbox.plist | grep AppleCurrentKeyboardLayoutInputSourceID | sed 's/AppleCurrentKeyboardLayoutInputSourceID = //' | sed 's/;//'
