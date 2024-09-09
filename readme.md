# koa-babel-node-mem-issue

The repository show the memory consumption w/o `babel-node`.

## Garbage collection (w `babel-node`)

[Log file](assets\logs\gc-traces-with-babel-node.log)

## Garbage collection (w/o `babel-node`)

[Log file](assets\logs\gc-traces-without-babel-node.log)

<hr />

## Inspector agent details (w `babel-node`)

- Containment results

<img alt="0x" src="assets\img\memory-snapshot-containment-with-babel-node.png">

- Summary results

<img alt="0x" src="assets\img\memory-snapshot-summary-with-babel-node.png">

- Statistics results

<img alt="0x" src="assets\img\memory-snapshot-statistics-with-babel-node.png">

## Inspector agent details (w/o `babel-node`)

- Containment results

<img alt="0x" src="assets\img\memory-snapshot-containment-without-babel-node.png">

- Summary results

<img alt="0x" src="assets\img\memory-snapshot-summary-without-babel-node.png">

- Statistics results

<img alt="0x" src="assets\img\memory-snapshot-statistics-without-babel-node.png">

## References

- https://github.com/thlorenz/v8-perf/blob/master/gc.md