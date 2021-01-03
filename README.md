# rename-extensions-node
Renames all files with a given extension into the same name with a new given extension

## Usage
Place the `rename_extensions.js` file in the directory you wish to change file extensions and run with node

Flags include `--dir`, `--from` and `--to`

### Example
If the current directory is where you'd like to change extensions of files at:
`node rename_extensions.js --from '.js' --to '.ts'`

If there are directories elswhere from the file relative to where this file is placed you wish to run this function:
`node rename_extensions.js --dir 'sub/folder/directory' --from '.js' --to '.ts'
