/**
 * Created by kmurugesan on 11/13/2014.
 */

suite('Global Tests', function () {
    test('Page has a valid title', function () {
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
    });
});
