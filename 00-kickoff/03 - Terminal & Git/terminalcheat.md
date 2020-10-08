# Terminal

## Directories & Files

```zsh
# Where am I? (print working directory)
pwd

# Where can I go?
ls
ll

# Move directory
cd path/to/directory

# Move back?
cd ..

# Return to home folder (~)
cd

# Create a new directory
mkdir new_directory_name
mkdir first_directory_name second_directory_name

# Delete a directory (⚠️ careful, there's no going back!)
rm -r directory_name
rm -rf directory_name

# Create a new file
touch file_name.rb

# Move a file somewhere
mv file_name.rb path/to/new/directory

# Rename a file
mv  file_name.rb new_file_name.rb

# Delete a file (⚠️ careful, there's no going back!)
rm file_name.rb

# Open current directory in sublime
stt

# Open current directory in finder (OS X only)
open .

# View content of file in terminal
cat path/to/file_name.rb
```

## Useful commands

```zsh
# Clear the command line window
clear

# List running processes
ps aux

# List running processes of a certain application
ps aux | grep 'ruby'

# Kill a process with PID
kill <pid>
kill 2209


# Find PID of process used by a specific port:
lsof -i :<port>
lsof -i :3000

# Check local storage usage
df -hP

# Check file sizes of files in current directory
du -shc *

# Check latest system errors
dmesg
```

## Keyboard Shortcuts

### Mac

```zsh
open a new tab                             # cmd + t
close the current tab                      # cmd + w
clear window (keeping history)             # ctrl + l
clear window (losing history)              # cmd + k
go to the next word                        # alt + →
go to the previous word                    # alt + ←
go to the beginning of line                # ctrl + a
go to the end of line                      # ctrl + e
erase the whole line                       # ctrl + u
navigate to tab on the right               # cmd + shift + →
navigate to tab on the left                # cmd + shift + ←
```

### Linux

```zsh
open a new tab                             # ctrl + shift + t
close the current tab                      # ctrl + shift + w
clear window                               # ctrl + L (or type "clear" in terminal)
```
