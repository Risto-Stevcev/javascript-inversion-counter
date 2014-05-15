test( "test mergeAndSort", function() {
    inversions = 0;
    var left     = [1, 3, 5];
    var right    = [2, 4, 6];
    var expected = [1, 2, 3, 4, 5, 6];
    deepEqual( expected, mergeAndCount(left, right) );
    equal( 3, inversions );
});

test( "test inversionCounter", function() {
    inversions = 0;
    var list     = [1, 44, 12, 3, 2, 19, 7];
    var expected = [1, 2, 3, 7, 12, 19, 44];
    deepEqual( expected, inversionCounter( list ) );
    equal( 10, inversions );
});
