# cleanMyNode

clean the node_modules dir in your workspace

my mac: m1 16+256 XD

## Functions

1. scan the dir to show the size of node_modules
2. use `rimraf` del the node_modules dir
3. from a top node of the directory, find all node_modules
4. depth should be set
5. an escape list should be given to skip some dirs of the file dir tree
6. check if it is a dir or file
7. check if it has package.json
8. fot monorepo, like `rush.json`, `lerna.json`, `turbo.json`, try their own clean cmd.
9. bundle the file by rollup
10. use [clipanion](https://mael.dev/clipanion/)?