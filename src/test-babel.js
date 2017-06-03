import path from 'path';

const directories = ['/foo', 'bar', 'bar/abc', 'querty', '..'];

const result = path.join(...directories);
console.log(result);
