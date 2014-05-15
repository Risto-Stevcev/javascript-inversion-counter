# JavaScript Inversion Counter

Implementation of the inversion counter algorithm in JavaScript. Running time wasn't too bad, very similar to Java's speed:

    console.time("timing foo");
    list = inversionCounter( list );
    console.timeEnd("timing foo");

|function         |calls |percent|own time |time         | avg   |min| max     |file
|-----------------|------|-------|---------|-------------|-------|---|---------|-------------------------------
|inversion-counter|199999|34.49% |166.818ms|**409.181ms**|0.002ms|0ms|409.181ms|inversion-counter.js (line 18)
