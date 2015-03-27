# grunt-karma-jasmine-sets

This is a sample project showing how karma-sets can be used alongside jasmine
and grunt-karma.

Also shows how to use karma-sets with gulp.


# Usage

npm install

Apply a fix to node_modules/karma-sets/index.js to change sockets[key].removeAllListeners('disconnect'); to:

if (key !== 'length') {

  sockets[key].removeAllListeners('disconnect');

}

Run grunt karma

This will run all the tests in the set but currently runs them multiple times (once for every set,
which kind of defeats the purpose of using sets in the first place.)

However, the gulp version does work via *gulp test* and exits cleanly. So for now, that's the way to go.