import assert from 'assert';
import nomaneNpm from '../lib';

describe('nomane-npm', function () {
  it('should have unit test!', function () {
    assert(typeof nomaneNpm.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});


/*describe('catatonic-circle', function () {
  it('should have a version number!', function () {
    assert(typeof catatonicCircle.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
*/
